document.addEventListener('DOMContentLoaded', function () {
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var nodes = document.querySelectorAll('[data-scribble]');
    if (!nodes.length) return;

    if (reduce) {
      nodes.forEach(function (el) {
        el.classList.add('scribble-visible');
      });
      return;
    }

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('scribble-visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'},
    );

    nodes.forEach(function (el) {
      io.observe(el);
    });
  });