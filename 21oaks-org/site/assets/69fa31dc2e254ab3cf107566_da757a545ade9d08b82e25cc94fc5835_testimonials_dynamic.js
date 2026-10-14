document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined") return;

  const authors = [...document.querySelectorAll(".author_item")];
  const quotes = [...document.querySelectorAll(".testimonial_item")];
  const desktopMq = window.matchMedia("(min-width: 992px)");

  if (!authors.length || authors.length !== quotes.length) return;

  const INTERVAL_MS = 10000;

  let current = 0;
  let ringTween = null;
  let quoteTween = null;
  let isAnimating = false;
  let isInViewport = true;
  let isDesktop = desktopMq.matches;

  function getCommonAncestor(a, b) {
    const parents = new Set();
    let node = a;

    while (node) {
      parents.add(node);
      node = node.parentElement;
    }

    node = b;
    while (node) {
      if (parents.has(node)) return node;
      node = node.parentElement;
    }

    return null;
  }

  function getObservedBlock() {
    const common = getCommonAncestor(authors[0], quotes[0]);

    if (
      common &&
      common !== document.body &&
      common !== document.documentElement
    ) {
      return common;
    }

    return (
      authors[0].closest("section") ||
      quotes[0].closest("section") ||
      authors[0].parentElement ||
      quotes[0].parentElement ||
      authors[0]
    );
  }

  function getRingEl(author) {
    return author?.querySelector(".author_circle") || author;
  }

  const observedBlock = getObservedBlock();

  function canAnimateNow() {
    return isInViewport && !document.hidden;
  }

  function canAutoplay() {
    return isDesktop && canAnimateNow();
  }

  function hardResetQuotes(activeIndex) {
    if (quoteTween) {
      quoteTween.kill();
      quoteTween = null;
    }

    isAnimating = false;

    quotes.forEach((q, i) => {
      gsap.killTweensOf(q);
      q.classList.toggle("is-active", i === activeIndex);
      gsap.set(q, {
        display: i === activeIndex ? "block" : "none",
        opacity: i === activeIndex ? 1 : 0,
        y: i === activeIndex ? 0 : 12
      });
    });
  }

  function animateQuoteChange(nextIndex) {
    if (isAnimating) return;

    const currentQuote = quotes.find((q) => q.classList.contains("is-active"));
    const nextQuote = quotes[nextIndex];

    if (!nextQuote) return;

    if (!canAnimateNow()) {
      hardResetQuotes(nextIndex);
      return;
    }

    if (!currentQuote || currentQuote === nextQuote) {
      hardResetQuotes(nextIndex);
      return;
    }

    if (quoteTween) {
      quoteTween.kill();
      quoteTween = null;
    }

    gsap.killTweensOf([currentQuote, nextQuote]);
    isAnimating = true;

    quoteTween = gsap.timeline({
      defaults: { overwrite: "auto" },
      onComplete: () => {
        isAnimating = false;
        quoteTween = null;
      }
    });

    quoteTween.to(currentQuote, {
      opacity: 0,
      y: 12,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        currentQuote.classList.remove("is-active");
        gsap.set(currentQuote, { display: "none" });

        nextQuote.classList.add("is-active");
        gsap.set(nextQuote, { display: "block" });
      }
    });

    quoteTween.fromTo(
      nextQuote,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power2.out"
      }
    );
  }

  function clearRingProgress() {
    authors.forEach((author, i) => {
      const ring = getRingEl(author);
      ring.style.setProperty("--p", i === current && !isDesktop ? 100 : 0);
    });
  }

  function startRing() {
    if (ringTween) {
      ringTween.kill();
      ringTween = null;
    }

    const activeAuthor = authors[current];
    const activeRing = getRingEl(activeAuthor);
    if (!activeAuthor || !activeRing) return;

    if (!isDesktop) {
      clearRingProgress();
      return;
    }

    authors.forEach((author, i) => {
      const ring = getRingEl(author);
      ring.style.setProperty("--p", i === current ? 0 : 0);
    });

    const progressState = { value: 0 };

    ringTween = gsap.to(progressState, {
      value: 100,
      duration: INTERVAL_MS / 1000,
      ease: "none",
      paused: !canAutoplay(),
      onUpdate() {
        activeRing.style.setProperty("--p", progressState.value.toFixed(2));
      },
      onComplete() {
        next();
      }
    });
  }

  function pausePlayback() {
    if (ringTween) ringTween.pause();
    if (quoteTween) quoteTween.pause();
  }

  function resumePlayback() {
    if (quoteTween && quoteTween.paused() && canAnimateNow()) {
      quoteTween.resume();
    }

    if (ringTween && ringTween.paused() && canAutoplay()) {
      ringTween.resume();
    }
  }

  function setActive(index, instant = false) {
    current = (index + authors.length) % authors.length;

    authors.forEach((el, i) => {
      el.classList.toggle("is-active", i === current);
      const ring = getRingEl(el);
      if (i !== current) ring.style.setProperty("--p", 0);
    });

    if (instant) {
      hardResetQuotes(current);
    } else {
      animateQuoteChange(current);
    }

    startRing();
  }

  function next() {
    setActive(current + 1, false);
  }

  function syncDesktopMode() {
    isDesktop = desktopMq.matches;
    startRing();
  }

  authors.forEach((el, i) => {
    el.addEventListener("click", () => {
      setActive(i, !canAnimateNow());
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pausePlayback();
    } else {
      resumePlayback();
    }
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      isInViewport = !!entry?.isIntersecting;

      if (isInViewport) {
        resumePlayback();
      } else {
        pausePlayback();
      }
    },
    {
      threshold: 0.01,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  observer.observe(observedBlock);

  if (desktopMq.addEventListener) {
    desktopMq.addEventListener("change", syncDesktopMode);
  } else if (desktopMq.addListener) {
    desktopMq.addListener(syncDesktopMode);
  }

  setActive(0, true);
});