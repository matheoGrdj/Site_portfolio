import { onMounted, onUnmounted } from 'vue'

export function useCursorGlow(containerRef) {
  let rafId = null

  const onMouseMove = (e) => {
    if (rafId) return
    rafId = requestAnimationFrame(() => {
      const el = containerRef.value
      if (!el) { rafId = null; return }
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty('--glow-x', `${x}px`)
      el.style.setProperty('--glow-y', `${y}px`)
      el.style.setProperty('--glow-opacity', '1')
      rafId = null
    })
  }

  const onMouseLeave = () => {
    const el = containerRef.value
    if (el) el.style.setProperty('--glow-opacity', '0')
  }

  onMounted(() => {
    const el = containerRef.value
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    const el = containerRef.value
    if (!el) return
    el.removeEventListener('mousemove', onMouseMove)
    el.removeEventListener('mouseleave', onMouseLeave)
    if (rafId) cancelAnimationFrame(rafId)
  })
}
