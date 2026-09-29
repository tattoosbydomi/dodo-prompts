// ui.js
window.createUI = function createUI(config) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  // UI strings
  const TEXT = {
    presets_title: "PRESETS",
    prompt_title: "PROMPT",
    copy_prompt: "Copy Prompt",
    presets_note_1: "For safety, presets are stored locally!",
    presets_note_2: "Export presets you want to back up.",
    flow_hint_1: "SCENE (what and where) → VIEW (camera and light)",
    flow_hint_2: "STYLE (art style) → OUTPUT (final settings)",
    empty_prompt: "Your prompt will appear here.",
  };

  function iconHTML(key) {
    return (window.ICONS && window.ICONS[key]) ? window.ICONS[key] : "";
  }

  // ---------------------------
  // HEADER
  // ---------------------------
  const header = document.createElement("div");
  header.className = "app-header";

  const title = document.createElement("h1");
  title.innerHTML = 'Prompt Builder';

  header.appendChild(title);
  app.appendChild(header);

  // ---------------------------
  // SECTIONS
  // ---------------------------
  (config.sections || []).forEach((section) => {
    const card = document.createElement("details");
    card.className = "section-card";
    card.dataset.sectionId = section.id;

    const summary = document.createElement("summary");
    summary.className = "section-header";

    const h2 = document.createElement("h2");
    const iconKey = section.icon || "";
    const iconSvg = (iconKey && window.ICONS && window.ICONS[iconKey]) ? window.ICONS[iconKey] : "";

    const sectionTitle = section.label || section.id || "";
    h2.innerHTML = `${iconSvg}<span class="h2-text">${sectionTitle}</span>`;

    const right = document.createElement("div");
    right.className = "section-header-right";

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "section-reset";
    resetBtn.innerHTML = `${iconHTML("refresh")}`;

    resetBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      card.querySelectorAll("[data-key]").forEach((el) => {
        if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      });

      window.buildPrompt();
      window.updateFieldHighlights();
    });

    const chev = document.createElement("span");
    chev.className = "section-chev";
    chev.textContent = "▼";
    chev.style.marginRight = "10px";

    right.appendChild(resetBtn);
    right.appendChild(chev);

    summary.appendChild(h2);
    summary.appendChild(right);
    card.appendChild(summary);

    const grid = document.createElement("div");
    grid.className = "grid";

    (section.fields || []).forEach((field) => {
      const label = document.createElement("label");
      label.textContent = field.label || field.key;

      let control;

      if (field.type === "select") {
        control = document.createElement("select");
        (field.options || []).forEach((opt) => {
          const o = document.createElement("option");
          o.value = opt.id;
          o.textContent = opt.id ? opt.label : "-";
          control.appendChild(o);
        });
      } else {
        control = document.createElement("input");
        control.type = "text";
        control.placeholder = field.placeholder || "";
      }

      control.dataset.key = field.key || `${card.dataset.sectionId}:${Math.random().toString(16).slice(2)}`;

      label.appendChild(control);
      grid.appendChild(label);
    });

    card.appendChild(grid);
    app.appendChild(card);
  });

  // ---------------------------
  // PRESETS
  // ---------------------------
  const presets = document.createElement("details");
  presets.className = "section-card preset-card";
  presets.open = false;

  presets.innerHTML = `
    <summary>
      <h2>${iconHTML("tools")}<span class="h2-text">${TEXT.presets_title}</span></h2>
      <span class="chev">▼</span>
    </summary>

    <div class="preset-body">
      <select id="presetSelect" class="preset-select"></select>

      <div class="preset-actions" style="margin-top:14px; margin-bottom:20px;">
        <button id="savePresetBtn" class="btn secondary" type="button">${iconHTML("save")}</button>
        <button id="exportPresetBtn" class="btn secondary" type="button">${iconHTML("export")}</button>
        <button id="importPresetBtn" class="btn secondary" type="button">${iconHTML("import")}</button>
        <button id="deletePresetBtn" class="btn danger" type="button">${iconHTML("delete")}</button>
        <input id="importPresetInput" class="hidden-file" type="file" accept=".txt,.json,application/json,text/plain">
      </div>

      <div class="toolbar">
        <small>
          <span>${TEXT.presets_note_1}</span>
          <span>${TEXT.presets_note_2}</span>
        </small>
      </div>
    </div>
  `;
  app.appendChild(presets);

  // ---------------------------
  // PROMPT
  // ---------------------------
  const result = document.createElement("div");
  result.className = "prompt-card";
  result.innerHTML = `
    <div class="section-header" style="margin-bottom:10px;">
      <h2 style="margin:0;">${iconHTML("document")}<span class="h2-text">${TEXT.prompt_title}</span></h2>
    </div>

    <div class="prompt-box" id="promptOutput">${TEXT.empty_prompt}</div>

    <div class="btn-row" style="margin-top:14px; margin-bottom:20px;">
      <button id="copyBtn" class="btn primary" type="button">${TEXT.copy_prompt}</button>
      <button id="resetAllBtn" class="btn ghost" type="button">${iconHTML("refresh")}</button>
    </div>

    <div class="toolbar">
      <small>
        <span>${TEXT.flow_hint_1}</span>
        <span>${TEXT.flow_hint_2}</span>
      </small>
    </div>
  `;
  app.appendChild(result);
};
