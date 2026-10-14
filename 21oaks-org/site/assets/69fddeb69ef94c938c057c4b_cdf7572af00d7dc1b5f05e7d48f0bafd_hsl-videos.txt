(function () {
  var HLS_CDN = "https://cdn.jsdelivr.net/npm/hls.js@1.5.18/dist/hls.min.js";

  function getUrl(video) {
    return (
      video.getAttribute("data-hls-src") ||
      video.getAttribute("data-src") ||
      video.getAttribute("src") ||
      ""
    );
  }

  function isHls(url) {
    return /\.m3u8(\?|#|$)/i.test(url);
  }

  function isMp4(url) {
    return /\.mp4(\?|#|$)/i.test(url);
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      if (window.Hls) return resolve();
      var s = document.createElement("script");
      s.src = src;
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function applyFlags(video) {
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;

    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("preload", "metadata");
  }

  function pauseVideo(video) {
    try {
      video.pause();
    } catch (e) {}
  }

  function destroyVideo(video) {
    if (video._hls) {
      video._hls.destroy();
      video._hls = null;
    }
    delete video.dataset.vInit;
  }

  function initVideo(video) {
    var url = getUrl(video);
    if (!url) return Promise.resolve();

    applyFlags(video);

    if (video.dataset.vInit === "1") {
      return video.play().catch(function () {});
    }

    video.dataset.vInit = "1";

    if (isMp4(url)) {
      if (video.src !== url) video.src = url;
      return video.play().catch(function () {});
    }

    if (!isHls(url)) return Promise.resolve();

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      return video.play().catch(function () {});
    }

    return loadScript(HLS_CDN)
      .then(function () {
        if (!(window.Hls && Hls.isSupported())) return;

        var hls = new Hls({ enableWorker: true, autoStartLoad: true });
        video._hls = hls;

        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play().catch(function () {});
        });

        hls.on(Hls.Events.ERROR, function (_, data) {
          if (data && data.fatal) {
            console.warn("HLS fatal:", data.type, data.details);
          }
        });
      })
      .catch(function (e) {
        console.error("hls.js load/init error", e);
      });
  }

  function boot() {
    var videos = Array.prototype.slice.call(document.querySelectorAll("video"));
    if (!videos.length) return;

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var video = entry.target;
          if (entry.isIntersecting) {
            initVideo(video);
          } else {
            pauseVideo(video);
          }
        });
      },
      { root: null, rootMargin: "200px 0px", threshold: 0.01 }
    );

    videos.forEach(function (video) {
      io.observe(video);
    });

    window.addEventListener("beforeunload", function () {
      videos.forEach(destroyVideo);
      io.disconnect();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();