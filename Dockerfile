# ==========================================
# Stage 1: Build
# ==========================================
FROM node:20-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances en premier (pour le cache Docker)
COPY package*.json ./

# Installer les dépendances
RUN npm ci --silent

# Copier le reste du code source
COPY . .

# Build de l'application
RUN npm run build

# ==========================================
# Stage 2: Production avec Nginx
# ==========================================
FROM nginx:alpine AS production

# Copier la configuration nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Healthcheck pour vérifier que nginx répond
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]
