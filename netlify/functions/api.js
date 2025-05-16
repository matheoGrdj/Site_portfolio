const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs").promises;
const path = require("path");

const JWT_SECRET = "your_jwt_secret_key";

const USERS_FILE = path.join(__dirname, "data", "users.json");
const GAMES_FILE = path.join(__dirname, "data", "games.json");

const getBody = async (req) => {
    if (!req.body) {
        return new Promise((resolve, reject) => {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk.toString();
            });
            req.on("end", () => {
                try {
                    resolve(JSON.parse(body));
                } catch (err) {
                    reject("Invalid JSON");
                }
            });
        });
    }
    return req.body;
};

const readJsonFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeJsonFile = async (filePath, data) => {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const authenticateToken = (req) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.split(" ")[1];
    if (!token) throw { statusCode: 401, body: "Unauthorized" };
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (err) {
        throw { statusCode: 403, body: "Forbidden" };
    }
};

exports.handler = async function (event, context) {
    const { path, httpMethod } = event;
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    };

    try {
        // CORS preflight
        if (httpMethod === "OPTIONS") {
            return {
                statusCode: 204,
                headers: {
                    ...headers,
                    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization",
                },
            };
        }

        // Auth routes
        if (path === "/api/register" && httpMethod === "POST") {
            const { username, password } = JSON.parse(event.body);
            const users = await readJsonFile(USERS_FILE);

            if (users.find((u) => u.username === username)) {
                return { statusCode: 400, body: JSON.stringify({ message: "User already exists" }) };
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = { id: uuidv4(), username, password: hashedPassword };
            users.push(newUser);
            await writeJsonFile(USERS_FILE, users);

            return {
                statusCode: 201,
                headers,
                body: JSON.stringify({ message: "User created", userId: newUser.id }),
            };
        }

        if (path === "/api/login" && httpMethod === "POST") {
            const { username, password } = JSON.parse(event.body);
            const users = await readJsonFile(USERS_FILE);
            const user = users.find((u) => u.username === username);
            if (!user) return { statusCode: 400, body: JSON.stringify({ message: "Bad user" }) };

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) return { statusCode: 400, body: JSON.stringify({ message: "Bad password" }) };

            const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: "1h" });
            return { statusCode: 200, headers, body: JSON.stringify({ token }) };
        }

        // Authenticated routes
        if (path.startsWith("/api/user") && httpMethod === "GET") {
            const user = authenticateToken(event);
            const userId = path.split("/").pop();
            const users = await readJsonFile(USERS_FILE);
            const found = users.find((u) => u.id === userId);
            if (!found) return { statusCode: 404, body: JSON.stringify({ message: "User not found" }) };
            return { statusCode: 200, headers, body: JSON.stringify({ id: found.id, username: found.username }) };
        }

        if (path === "/api/user" && httpMethod === "PUT") {
            const user = authenticateToken(event);
            const { username, password } = JSON.parse(event.body);
            const users = await readJsonFile(USERS_FILE);
            const index = users.findIndex((u) => u.id === user.id);
            if (index === -1) return { statusCode: 404, body: JSON.stringify({ message: "User not found" }) };

            if (username) {
                if (users.find((u) => u.username === username && u.id !== user.id)) {
                    return { statusCode: 400, body: JSON.stringify({ message: "Username already exists" }) };
                }
                users[index].username = username;
            }

            if (password && password.length > 0) {
                users[index].password = await bcrypt.hash(password, 10);
            }

            await writeJsonFile(USERS_FILE, users);
            const newToken = jwt.sign({ id: user.id, username: users[index].username }, JWT_SECRET, { expiresIn: "1h" });

            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    message: "User updated",
                    user: {
                        id: user.id,
                        token: newToken,
                        username: users[index].username,
                    },
                }),
            };
        }

        // Games
        if (path === "/api/games" && httpMethod === "POST") {
            const user = authenticateToken(event);
            const games = await readJsonFile(GAMES_FILE);

            const newGame = {
                id: uuidv4(),
                creator: user.id,
                player1: user.id,
                player2: null,
                board: Array(9).fill(null),
                status: "waiting",
                currentPlayer: user.id,
            };

            games.push(newGame);
            await writeJsonFile(GAMES_FILE, games);

            return { statusCode: 201, headers, body: JSON.stringify(newGame) };
        }

        if (path === "/api/games" && httpMethod === "GET") {
            authenticateToken(event);
            const games = await readJsonFile(GAMES_FILE);
            const availableGames = games.filter(
                (game) => game.status === "waiting" || game.status === "in_progress"
            );
            return { statusCode: 200, headers, body: JSON.stringify(availableGames) };
        }

        if (/\/api\/games\/([^/]+)\/join/.test(path) && httpMethod === "POST") {
            const user = authenticateToken(event);
            const gameId = path.split("/")[3];
            const games = await readJsonFile(GAMES_FILE);
            const gameIndex = games.findIndex((g) => g.id === gameId);
            if (gameIndex === -1) return { statusCode: 404, body: JSON.stringify({ message: "Game not found" }) };

            const game = games[gameIndex];
            if (game.player2) return { statusCode: 400, body: JSON.stringify({ message: "Game already completed" }) };

            game.player2 = user.id;
            game.status = "in_progress";

            games[gameIndex] = game;
            await writeJsonFile(GAMES_FILE, games);
            return { statusCode: 200, headers, body: JSON.stringify(game) };
        }

        return { statusCode: 404, headers, body: JSON.stringify({ message: "Not found" }) };
    } catch (error) {
        console.error("ERROR", error);
        const statusCode = error.statusCode || 500;
        return { statusCode, headers, body: JSON.stringify({ error: error.body || "Internal Server Error" }) };
    }
};
