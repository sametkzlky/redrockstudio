/* ============================================================
   Redrock Studio — main.js
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state + progress bar ---------- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("scrollProgress");

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (nav) nav.classList.toggle("is-scrolled", y > 20);

    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  function closeMenu() {
    if (!links) return;
    links.classList.remove("is-open");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 0.08) + "s";
      io.observe(el);
    });
  }

  /* ---------- Pointer tilt (hero icons) ---------- */
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(function (el) {
      var rect;
      el.addEventListener("mouseenter", function () { rect = el.getBoundingClientRect(); });
      el.addEventListener("mousemove", function (e) {
        if (!rect) rect = el.getBoundingClientRect();
        var rx = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
        var ry = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
        el.style.transform = "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
    });
  }

  /* ---------- Copy e-mail ---------- */
  var copyBtn = document.getElementById("copyMail");
  if (copyBtn && navigator.clipboard) {
    var copyLabel = copyBtn.textContent;
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(copyBtn.getAttribute("data-mail")).then(function () {
        copyBtn.textContent = "Kopyalandı ✓";
        setTimeout(function () { copyBtn.textContent = copyLabel; }, 1800);
      });
    });
  } else if (copyBtn) {
    copyBtn.hidden = true;
  }
})();
