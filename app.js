const TEXT = {
  preset_name: "Preset name?",
  delete_preset: "Delete this preset?",
  reset_all: "Reset all fields?",
  invalid_preset: "Invalid preset file.",
  import_failed: "Import failed. File must be JSON from Export.",
  copy_failed: "Copy failed, copy manually.",
  copied: "✅ Copied!",
  copy_prompt: "Copy Prompt",
};

function setupSectionAccordion() {
  // drop listeners from a previous setup
  if (window.__accordionAbort) window.__accordionAbort.abort();
  const ac = new AbortController();
  window.__accordionAbort = ac;

  const sel = "details.section-card[data-section-id]";

  // where the opened summary is pinned on screen
  const TOP_ANCHOR_PX = 120;

  const closeOthers = (current) => {
    document.querySelectorAll(`${sel}[open]`).forEach((d) => {
      if (d !== current) d.open = false;
    });
  };

  // jump the summary to the anchor, then re-snap (fixes iOS toolbar/reflow drift)
  const snapSummaryToAnchor = (summaryEl) => {
    const snapOnce = () => {
      const top = summaryEl.getBoundingClientRect().top;
      const target = Math.max(0, window.scrollY + (top - TOP_ANCHOR_PX));
      window.scrollTo(0, target);
    };

    // 1) first jump
    snapOnce();

    // 2) second jump, after Safari settles (important)
    requestAnimationFrame(() => {
      snapOnce();

      // 3) occasional extra snap for leftover drift
      requestAnimationFrame(() => snapOnce());
    });
  };

  document.addEventListener(
    "click",
    (e) => {
      const summary = e.target.closest(`${sel} > summary`);
      if (!summary) return;

      const card = summary.parentElement;
      if (!(card instanceof HTMLDetailsElement)) return;

      e.preventDefault();

      const willOpen = !card.open;

      // closing: just close
      if (!willOpen) {
        card.open = false;
        return;
      }

      // 1) close the others (stabilizes page height)
      closeOthers(card);

      // 2) move the summary to the anchor
      snapSummaryToAnchor(summary);

      // 3) open this one a frame later to avoid reflow in the same tick
      requestAnimationFrame(() => {
        card.open = true;
      });
    },
    { capture: true, signal: ac.signal }
  );

  // change: no scrolling, keep this section open and close the others
  document.addEventListener(
    "change",
    (e) => {
      const el = e.target;
      if (!(el instanceof HTMLElement)) return;
      if (!el.closest("[data-key]")) return;

      const card = el.closest(sel);
      if (!card) return;

      card.open = true;
      closeOthers(card);
    },
    { capture: true, signal: ac.signal }
  );
}

function bindRuntimeHandlers() {
  // highlight sections when toggle
  document.querySelectorAll("details.section-card[data-section-id]").forEach((card) => {
    card.addEventListener("toggle", () => window.updateFieldHighlights());
  });

  const inputs = document.querySelectorAll("[data-key]");
  const onAnyChange = () => {
    window.buildPrompt();
    window.updateFieldHighlights();
  };

  inputs.forEach((el) => {
    el.addEventListener("input", onAnyChange);
    el.addEventListener("change", onAnyChange);
  });

  // presets init
  window.Presets.refreshPresetUI();

  const presetSelect = document.getElementById("presetSelect");
  if (presetSelect) {
    presetSelect.addEventListener("change", () => {
      if (presetSelect.value === "") return;
      window.Presets.loadPreset(Number(presetSelect.value));
      onAnyChange();
    });
  }

  const savePresetBtn = document.getElementById("savePresetBtn");
  if (savePresetBtn) {
    savePresetBtn.addEventListener("click", () => {
      const name = prompt(TEXT.preset_name);
      if (!name) return;
      window.Presets.savePreset(name.trim());
    });
  }

  const deletePresetBtn = document.getElementById("deletePresetBtn");
  if (deletePresetBtn) {
    deletePresetBtn.addEventListener("click", () => {
      const sel = document.getElementById("presetSelect");
      const idx = sel && sel.value !== "" ? Number(sel.value) : null;
      if (idx === null || Number.isNaN(idx)) return;

      const ok = confirm(TEXT.delete_preset);
      if (!ok) return;

      window.Presets.deletePreset(idx);
      if (sel) sel.value = "";
      onAnyChange();
    });
  }

  const exportPresetBtn = document.getElementById("exportPresetBtn");
  if (exportPresetBtn) {
    exportPresetBtn.addEventListener("click", () => {
      const sel = document.getElementById("presetSelect");
      const idx = sel && sel.value !== "" ? Number(sel.value) : null;
      if (idx === null || Number.isNaN(idx)) return;
      window.Presets.exportPreset(idx);
    });
  }

  const importBtn = document.getElementById("importPresetBtn");
  const importInput = document.getElementById("importPresetInput");
  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => importInput.click());

    importInput.addEventListener("change", async () => {
      const file = importInput.files && importInput.files[0];
      if (!file) return;

      try {
        const ok = await window.Presets.importPresetFromFile(file);
        if (!ok) alert(TEXT.invalid_preset);
      } catch {
        alert(TEXT.import_failed);
      } finally {
        importInput.value = "";
        onAnyChange();
      }
    });
  }

  // copy
  const copyBtn = document.getElementById("copyBtn");
  let copyResetTimer = null;

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      if (copyBtn.disabled) return;

      const txt = document.getElementById("promptOutput")?.textContent || "";
      if (!txt) return;

      try {
        await navigator.clipboard.writeText(txt);

        const original = copyBtn.dataset.originalText || copyBtn.textContent;
        copyBtn.dataset.originalText = original;

        if (copyResetTimer) clearTimeout(copyResetTimer);

        copyBtn.textContent = TEXT.copied;
        copyBtn.disabled = true;

        copyResetTimer = setTimeout(() => {
          copyBtn.textContent = copyBtn.dataset.originalText || TEXT.copy_prompt;
          copyBtn.disabled = false;
          copyResetTimer = null;
        }, 1200);
      } catch {
        alert(TEXT.copy_failed);
      }
    });
  }

  // reset all
  const resetAllBtn = document.getElementById("resetAllBtn");
  if (resetAllBtn) {
    resetAllBtn.addEventListener("click", () => {
      const ok = confirm(TEXT.reset_all);
      if (!ok) return;

      document.querySelectorAll("[data-key]").forEach((el) => {
        if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      });

      document.querySelectorAll("details.section-card[data-section-id]").forEach((card) => {
        card.open = false;
      });

      const first = document.querySelector("details.section-card[data-section-id]");
      if (first) first.open = false;

      onAnyChange();
    });
  }

  // scroll btn
  window.initScrollButton();

  // first render
  onAnyChange();
}

document.addEventListener("DOMContentLoaded", () => {
  // first UI build
  window.createUI(window.PROMPT_CONFIG);

  setupSectionAccordion();
  // bind handlers
  bindRuntimeHandlers();
});

// SW
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js");
  });
}
