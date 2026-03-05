import { onMounted, onUnmounted } from 'vue'

export function useCardTilt(containerRef, { maxTilt = 4 } = {}) {
  const listeners = []

  const handleMouseMove = (card, e) => {
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform =
      `perspective(800px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg) translateY(-5px)`
  }

  const handleMouseLeave = (card) => {
    card.style.transform = ''
  }

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    const el = containerRef.value
    if (!el) return
    const cards = el.querySelectorAll('.card-surface')
    cards.forEach((card) => {
      const move = (e) => handleMouseMove(card, e)
      const leave = () => handleMouseLeave(card)
      card.addEventListener('mousemove', move)
      card.addEventListener('mouseleave', leave)
      listeners.push({ el: card, move, leave })
    })
  })

  onUnmounted(() => {
    listeners.forEach(({ el, move, leave }) => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    })
  })
}
