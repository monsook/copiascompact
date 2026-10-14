document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const section = document.querySelector(".dynamic_section");
  if (!section) return;

  const title = section.querySelector(".middle");
  const gallery = section.querySelector(".interaction_gallery");
  const center = section.querySelector(".photo--center");

  const lt = section.querySelector(".photo--lt");
  const lm = section.querySelector(".photo--lm");
  const lb = section.querySelector(".photo--lb");
  const rt = section.querySelector(".photo--rt");
  const rm = section.querySelector(".photo--rm");
  const rb = section.querySelector(".photo--rb");

  const left = [lt, lm, lb];
  const right = [rt, rm, rb];

  function offLeft(el) {
    return -(window.innerWidth + el.getBoundingClientRect().width + 160);
  }

  function offRight(el) {
    return window.innerWidth + el.getBoundingClientRect().width + 160;
  }

  gsap.set(center, { scale: 0, transformOrigin: "50% 50%" });
  gsap.set([lt, lm, lb, rt, rm, rb], { autoAlpha: 0, y: 180, scale: 0.9, x: 0 });

  gsap.to(center, {
    scale: 1.12,
    ease: "none",
    scrollTrigger: {
      trigger: title,
      start: "top top",
      end: "bottom -120%",
      scrub: true
    }
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: gallery,
      start: "top top",
      end: "+=300%",
      pin: true,
      pinSpacing: true,
      scrub: true,
      anticipatePin: 0,
      fastScrollEnd: true,
      invalidateOnRefresh: true
    }
  });

  tl.to([lt, lm, lb, rt, rm, rb], {
    autoAlpha: 1,
    scale: 1,
    ease: "none",
    duration: 0.2,
    stagger: 0.02
  }, 0.02);

  tl.to(lt, { y: -16, ease: "none", duration: 1.2 }, 0.02);
  tl.to(lm, { y: -24, ease: "none", duration: 1.2 }, 0.02);
  tl.to(lb, { y: -12, ease: "none", duration: 1.2 }, 0.02);
  tl.to(rt, { y: -18, ease: "none", duration: 1.2 }, 0.02);
  tl.to(rm, { y: -10, ease: "none", duration: 1.2 }, 0.02);
  tl.to(rb, { y: -22, ease: "none", duration: 1.2 }, 0.02);

  tl.to(left, {
    x: (_, el) => offLeft(el),
    y: "-=52",
    ease: "none",
    duration: 1.1,
    stagger: 0.05
  }, 1.25);

  tl.to(right, {
    x: (_, el) => offRight(el),
    y: "-=52",
    ease: "none",
    duration: 1.1,
    stagger: 0.05
  }, 1.25);

  window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
  });

  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
});