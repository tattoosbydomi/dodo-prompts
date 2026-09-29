(function(){
  const KEY = "prompt_presets_v1";

  const TEXT = {
    dash: "—",
    preset_default: "Preset",
    imported_default: "Imported preset",
  };

  function getPresets(){
    try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
    catch { return []; }
  }

  function setPresets(presets){
    localStorage.setItem(KEY, JSON.stringify(presets));
    requestPersistentStorage();
  }

  // Ask the browser not to evict our storage (Safari's 7-day cleanup, low-disk cleanup, etc.)
  function requestPersistentStorage(){
    try {
      if (navigator.storage?.persist) navigator.storage.persist().catch(() => {});
    } catch {}
  }

  requestPersistentStorage();

  function makeUniqueName(baseName, presets){
    const names = presets.map(p => p.name);
    if (!names.includes(baseName)) return baseName;
    let i = 2;
    while (names.includes(`${baseName} (${i})`)) i++;
    return `${baseName} (${i})`;
  }

  function captureState(){
    const state = [];
    document.querySelectorAll("[data-key]").forEach(el => {
      state.push({
        key: el.dataset.key,
        tag: el.tagName,
        value: el.value ?? "",
        selectedIndex: el.tagName === "SELECT" ? el.selectedIndex : null
      });
    });
    return state;
  }

  function applyState(state){
    if (!Array.isArray(state)) return;

    const map = new Map(state.map(x => [x.key, x]));
    document.querySelectorAll("[data-key]").forEach(el => {
      const item = map.get(el.dataset.key);
      if (!item) return;

      if (el.tagName === "SELECT") {
        // match by value first, fall back to selectedIndex
        const val = item.value ?? "";
        const optIndex = [...el.options].findIndex(o => o.value === val);
        if (optIndex >= 0) el.selectedIndex = optIndex;
        else if (typeof item.selectedIndex === "number") el.selectedIndex = item.selectedIndex;
        else el.selectedIndex = 0;
      } else {
        el.value = String(item.value ?? "");
      }
    });
  }

  function refreshPresetUI(){
    const select = document.getElementById("presetSelect");
    if (!select) return;

    const presets = getPresets();
    select.innerHTML = "";

    const first = document.createElement("option");
    first.value = "";
    first.textContent = TEXT.dash;
    select.appendChild(first);

    presets.forEach((p, idx) => {
      const o = document.createElement("option");
      o.value = String(idx);
      o.textContent = p.name;
      select.appendChild(o);
    });
  }

  function savePreset(name){
    const presets = getPresets();
    const clean = (name || "").trim() || TEXT.preset_default;
    const unique = makeUniqueName(clean, presets);

    presets.push({
      name: unique,
      createdAt: Date.now(),
      state: captureState()
    });

    setPresets(presets);
    refreshPresetUI();
  }

  function loadPreset(index){
    const presets = getPresets();
    const p = presets[index];
    if (!p) return;

    applyState(p.state);

    window.buildPrompt?.();
    window.updateFieldHighlights?.();
  }

  function deletePreset(index){
    const presets = getPresets();
    if (index < 0 || index >= presets.length) return;

    presets.splice(index, 1);
    setPresets(presets);
    refreshPresetUI();
  }

  function exportPreset(index){
    const presets = getPresets();
    const p = presets[index];
    if (!p) return;

    const payload = { name: p.name, createdAt: p.createdAt, state: p.state };
    const text = JSON.stringify(payload, null, 2);
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });

    const safeName = String(p.name || "Preset")
      .trim()
      .replace(/[<>:"/\\|?*\x00-\x1F]/g, "_")
      .slice(0, 60);

    const filename = `Preset_${safeName}.txt`;

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function importPresetFromFile(file){
    const text = await file.text();
    const payload = JSON.parse(text);

    if (!payload || !Array.isArray(payload.state)) return false;

    const presets = getPresets();
    const fallback = TEXT.imported_default;
    const rawName = String(payload.name || fallback).trim() || fallback;
    const unique = makeUniqueName(rawName, presets);

    presets.push({
      name: unique,
      createdAt: Number(payload.createdAt) || Date.now(),
      state: payload.state
    });

    setPresets(presets);
    refreshPresetUI();
    return true;
  }

  window.Presets = {
    refreshPresetUI,
    savePreset,
    loadPreset,
    deletePreset,
    exportPreset,
    importPresetFromFile
  };
})();
