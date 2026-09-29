window.initScrollButton = function initScrollButton() {
  const scrollBtn = document.getElementById("scrollDownBtn");
  if (!scrollBtn) return;

  const scroller = document.scrollingElement || document.documentElement;

  // --- cleanup previous bindings (if any)
  const prev = window.__scrollBindings;
  if (prev) {
    try { prev.btn?.removeEventListener("click", prev.onClick); } catch {}
    try { window.removeEventListener("scroll", prev.onScroll); } catch {}
    try { window.removeEventListener("resize", prev.onResize); } catch {}
  }

  const onClick = () => {
    scroller.scrollTo({ top: scroller.scrollHeight, behavior: "smooth" });
  };

  const updateScrollButton = () => {
    const atBottom =
      (scroller.scrollTop + window.innerHeight) >= (scroller.scrollHeight - 500);
    scrollBtn.classList.toggle("hidden", atBottom);
  };

  const onScroll = () => updateScrollButton();
  const onResize = () => updateScrollButton();

  scrollBtn.addEventListener("click", onClick);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  window.__scrollBindings = { btn: scrollBtn, onClick, onScroll, onResize };

  updateScrollButton();
};
