window.updateFieldHighlights = function updateFieldHighlights() {
  const isActive = (el) => {
    return el.tagName === "SELECT"
      ? el.selectedIndex > 0
      : el.value.trim().length > 0;
  };

  // 1) fields + overall "anything filled in" flag
  let anyActive = false;

  document.querySelectorAll("[data-key]").forEach((el) => {
    const active = isActive(el);
    anyActive = anyActive || active;
    el.classList.toggle("field-active", active);
  });

  // 2) sections: highlight collapsed ones + show/hide the section reset button
  document.querySelectorAll("details.section-card[data-section-id]").forEach((card) => {
    const hasActive = [...card.querySelectorAll("[data-key]")].some(isActive);

    // highlight only when collapsed
    card.classList.toggle("section-has-active", hasActive && !card.open);

    // section reset button (class="section-reset")
    const sectionResetBtn = card.querySelector("summary .section-reset");
    if (sectionResetBtn) {
      sectionResetBtn.classList.toggle("is-hidden", !hasActive);
    }
  });

  // 3) global reset in the PROMPT card
  const resetAllBtn = document.getElementById("resetAllBtn");
  if (resetAllBtn) {
    resetAllBtn.classList.toggle("is-hidden", !anyActive);
  }
};
