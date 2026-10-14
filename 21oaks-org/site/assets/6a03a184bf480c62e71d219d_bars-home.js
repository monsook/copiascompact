document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('.lines_list');
  if (!section) return;

  const bars = Array.from(section.querySelectorAll('.lines_dynamic .active_bar'));
  const targets = ['35%', '55%', '70%'];

  bars.forEach((bar) => {
    bar.style.width = '0%';
  });

  let played = false;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || played) return;
        played = true;

        bars.forEach((bar, i) => {
          bar.style.transition = 'width 900ms cubic-bezier(0.22, 1, 0.36, 1)';
          bar.style.transitionDelay = `${i * 140}ms`;
          bar.style.width = targets[i] || '0%';
        });

        io.disconnect();
      });
    },
    { threshold: 0.35 }
  );

  io.observe(section);
});