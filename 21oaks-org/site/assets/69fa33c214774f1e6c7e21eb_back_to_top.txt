document.addEventListener('DOMContentLoaded', () => {
    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function smoothScrollToTop(duration = 1200) {
      const startY = window.pageYOffset;
      if (startY <= 0) return;

      const startTime = performance.now();

      function step(now) {
        const elapsed = now - startTime;
        const p = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(p);

        window.scrollTo(0, Math.round(startY * (1 - eased)));

        if (p < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    document.querySelectorAll('.back_top').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollToTop(1200);
      });
    });
  });