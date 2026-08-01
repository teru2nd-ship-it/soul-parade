(function () {
  "use strict";

  if (window.__jataMenu) {
    return;
  }
  window.__jataMenu = true;
  window.__jataGameMenu = true;

  const currentScript = document.currentScript;
  const homeUrl =
    (currentScript && currentScript.dataset.home) || "https://www.teru44.net/games";

  function isIPhone() {
    const ua = navigator.userAgent || "";
    const platform = navigator.platform || "";
    return /iPhone|iPod/.test(ua) || platform === "iPhone";
  }

  function fullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement || null;
  }

  function requestFullscreen() {
    const root = document.documentElement;
    return root.requestFullscreen || root.webkitRequestFullscreen || null;
  }

  function exitFullscreen() {
    return document.exitFullscreen || document.webkitExitFullscreen || null;
  }

  function openNewWindow() {
    window.open(window.location.href, "_blank", "noopener");
  }

  function injectStyles() {
    if (document.getElementById("jm-style")) {
      return;
    }
    const style = document.createElement("style");
    style.id = "jm-style";
    style.textContent =
      "#jm-hot{position:fixed;top:0;left:0;right:0;height:22px;z-index:2147483640}" +
      "#jm-handle{position:fixed;top:0;left:50%;transform:translateX(-50%);z-index:2147483646;width:58px;height:18px;background:rgba(18,26,51,.92);border:1px solid #26315c;border-top:none;border-radius:0 0 11px 11px;color:#8b95c9;font:11px/1 -apple-system,BlinkMacSystemFont,sans-serif;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:opacity .2s;-webkit-tap-highlight-color:transparent}" +
      "#jm-handle.h{opacity:0;pointer-events:none}" +
      "#jm-bar{position:fixed;top:0;left:50%;transform:translate(-50%,-120%);z-index:2147483647;display:flex;gap:8px;padding:8px 10px;background:rgba(13,19,38,.97);border:1px solid #26315c;border-top:none;border-radius:0 0 16px 16px;box-shadow:0 8px 24px rgba(0,0,0,.5);transition:transform .28s ease}" +
      "#jm-bar.s{transform:translate(-50%,0)}" +
      ".jm-b{background:#121a33;border:1px solid #26315c;color:#e8ecff;border-radius:10px;padding:9px 14px;font:700 13px -apple-system,BlinkMacSystemFont,sans-serif;cursor:pointer;text-decoration:none;white-space:nowrap;-webkit-tap-highlight-color:transparent}" +
      ".jm-b:active{transform:scale(.95)}" +
      ".jm-b:focus-visible,#jm-handle:focus-visible{outline:3px solid rgba(85,240,255,.72);outline-offset:2px}";
    document.head.appendChild(style);
  }

  function init() {
    if (!document.body || document.getElementById("jm-bar")) {
      return;
    }

    injectStyles();

    const hot = document.createElement("div");
    hot.id = "jm-hot";

    const handle = document.createElement("button");
    handle.id = "jm-handle";
    handle.type = "button";
    handle.textContent = "▾";
    handle.setAttribute("aria-label", "メニュー");

    const bar = document.createElement("div");
    bar.id = "jm-bar";

    const home = document.createElement("a");
    home.className = "jm-b";
    home.href = homeUrl;
    home.target = "_top";
    home.rel = "noopener";
    home.textContent = "🏠 GAMES";

    const full = document.createElement("button");
    full.className = "jm-b";
    full.type = "button";

    let timer = null;
    function show() {
      clearTimeout(timer);
      bar.classList.add("s");
      handle.classList.add("h");
    }
    function hideSoon() {
      timer = setTimeout(() => {
        bar.classList.remove("s");
        handle.classList.remove("h");
      }, 260);
    }

    function updateFullscreenLabel() {
      if (isIPhone()) {
        full.textContent = "🗗 別ウィンドウ";
        full.setAttribute("aria-label", "別ウィンドウで開く");
        return;
      }
      full.textContent = fullscreenElement() ? "⛶ 解除" : "⛶ 全画面";
      full.setAttribute("aria-label", fullscreenElement() ? "全画面解除" : "全画面");
    }

    full.addEventListener("click", () => {
      if (isIPhone()) {
        openNewWindow();
        return;
      }

      const exit = exitFullscreen();
      const request = requestFullscreen();
      if (fullscreenElement()) {
        if (exit) {
          exit.call(document);
        }
        return;
      }
      if (!request) {
        openNewWindow();
        return;
      }
      const result = request.call(document.documentElement);
      if (result && typeof result.catch === "function") {
        result.catch(openNewWindow);
      }
    });

    hot.addEventListener("mouseenter", show);
    bar.addEventListener("mouseenter", () => clearTimeout(timer));
    bar.addEventListener("mouseleave", hideSoon);
    handle.addEventListener("click", (event) => {
      event.stopPropagation();
      if (bar.classList.contains("s")) {
        bar.classList.remove("s");
        handle.classList.remove("h");
      } else {
        show();
      }
    });
    document.addEventListener("click", (event) => {
      if (bar.classList.contains("s") && !bar.contains(event.target) && event.target !== handle) {
        bar.classList.remove("s");
        handle.classList.remove("h");
      }
    });
    document.addEventListener("fullscreenchange", updateFullscreenLabel);
    document.addEventListener("webkitfullscreenchange", updateFullscreenLabel);

    updateFullscreenLabel();
    bar.append(home, full);
    document.body.append(hot, handle, bar);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
