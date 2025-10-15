
export function scrollToTop(duration = 500) {
  const start = window.scrollY
  const startTime = performance.now()

  function scroll() {
    const now = performance.now()
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Ease-in-out curve (for smoother motion)
    const ease = 0.5 * (1 - Math.cos(Math.PI * progress))

    window.scrollTo(0, start * (1 - ease))

    if (progress < 1) {
      requestAnimationFrame(scroll)
    }
  }

  requestAnimationFrame(scroll)
}
