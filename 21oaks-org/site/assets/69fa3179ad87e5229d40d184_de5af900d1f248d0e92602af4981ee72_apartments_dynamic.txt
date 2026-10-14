document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector('.apartments');
  if (!section) return;

  const sticky = section.querySelector('.wrapper_apartments');
  const title = section.querySelector('.heading_apartments');
  const desktopViewport = section.querySelector('.apart_cards_viewport.only_desktop');
  const track = desktopViewport?.querySelector('.apart_cards_track');
  const cards = gsap.utils.toArray(track?.querySelectorAll('.apart_card') || []);
  const scribbles = gsap.utils.toArray(
    title?.querySelectorAll('[data-scribble="4"].scribble-wrap') || []
  );

  if (!sticky || !title || !desktopViewport || !track || cards.length < 2) return;

  if (getComputedStyle(sticky).position === 'static') {
    sticky.style.position = 'relative';
  }

  function ensureBg() {
    let bg = sticky.querySelector('.apartments_bg_gradient');
    if (!bg) {
      bg = document.createElement('div');
      bg.className = 'apartments_bg_gradient';
      sticky.prepend(bg);
    }
    return bg;
  }

  function waitImages(scope) {
    const imgs = Array.from(scope.querySelectorAll('img'));
    const pending = imgs.filter((img) => !img.complete);
    if (!pending.length) return Promise.resolve();

    return Promise.all(
      pending.map(
        (img) =>
          new Promise((res) => {
            img.addEventListener('load', res, { once: true });
            img.addEventListener('error', res, { once: true });
          })
      )
    );
  }

  const bg = ensureBg();
  const mm = gsap.matchMedia();

  mm.add('(min-width: 991px)', () => {
    let isBuilt = false;

    function killLocalTriggers() {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section || t.trigger === sticky || t.pin === sticky) t.kill();
      });
    }

    function resetState() {
      gsap.set(track, { clearProps: 'x,transform' });
      gsap.set(title, { clearProps: 'y,opacity,scale,transform' });
      gsap.set(bg, { clearProps: 'opacity' });
      gsap.set(scribbles, { clearProps: '--scribble-line-color' });
      cards.forEach((card) =>
        gsap.set(card, { clearProps: 'xPercent,yPercent,rotation,transform' })
      );
    }

    function build() {
      killLocalTriggers();

      const vw = window.innerWidth;
      const trackW = track.scrollWidth;
      if (!trackW) return;

      const xStart = vw + 220;
      const xEnd = -(trackW + 220);

      gsap.set(track, { x: xStart, force3D: true });
      gsap.set(title, { y: 0, opacity: 1, scale: 1 });
      gsap.set(bg, { opacity: 0 });
      gsap.set(scribbles, { '--scribble-line-color': '#E8CEFF' });

      const presets = [
        { dir: 1, baseRot: -3.2, xAmp: 8, yAmp: 3.5, rotAmp: 3.2 },
        { dir: -1, baseRot: 3.0, xAmp: 9, yAmp: 4.5, rotAmp: 3.4 },
        { dir: 1, baseRot: -2.8, xAmp: 7, yAmp: 3.0, rotAmp: 2.9 },
        { dir: -1, baseRot: 3.4, xAmp: 8, yAmp: 4.0, rotAmp: 3.6 },
      ];

      cards.forEach((card, i) => {
        const p = presets[i % presets.length];
        gsap.set(card, {
          xPercent: 0,
          yPercent: 0,
          rotation: p.baseRot,
          force3D: true,
        });
      });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=430%',
          pin: sticky,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(title, { y: -230, duration: 0.3 }, 0.0)
        .to(bg, { opacity: 1, duration: 0.55, ease: 'power2.out' }, 0.06)
        .to(
          scribbles,
          { '--scribble-line-color': '#292929', duration: 0.45, ease: 'power2.out' },
          0.1
        )
        .to(track, { x: xEnd, duration: 1.0 }, 0.08)
        .to(title, { y: 0, duration: 0.24 }, 0.82);

      cards.forEach((card, i) => {
        const p = presets[i % presets.length];

        tl.to(
          card,
          {
            xPercent: p.dir * p.xAmp,
            yPercent: -p.yAmp,
            rotation: p.baseRot + p.rotAmp,
            duration: 0.24,
          },
          0.1
        )
          .to(
            card,
            {
              xPercent: -p.dir * (p.xAmp * 0.7),
              yPercent: p.yAmp * 0.55,
              rotation: p.baseRot - p.rotAmp * 0.7,
              duration: 0.26,
            },
            0.36
          )
          .to(
            card,
            {
              xPercent: p.dir * (p.xAmp * 0.35),
              yPercent: -p.yAmp * 0.3,
              rotation: p.baseRot + 0.8,
              duration: 0.24,
            },
            0.64
          );
      });

      ScrollTrigger.refresh();
      isBuilt = true;
    }

    waitImages(desktopViewport).then(build);

    const onResize = () => {
      if (isBuilt) ScrollTrigger.refresh();
    };

    const onLoad = () => {
      if (isBuilt) ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('load', onLoad);

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('load', onLoad);
      killLocalTriggers();
      resetState();
    };
  });
});