// config.js
// Builds window.PROMPT_CONFIG (sections -> fields -> options) from PROMPT_DICTIONARY + PROMPT_STRUCTURE

(function () {
  const dict = window.PROMPT_DICTIONARY;
  const struct = window.PROMPT_STRUCTURE;

  if (!dict || !Array.isArray(dict.items)) {
    console.error("PROMPT_DICTIONARY.items not found");
    window.PROMPT_CONFIG = { sections: [] };
    return;
  }
  if (!struct || !Array.isArray(struct.containers)) {
    console.error("PROMPT_STRUCTURE.containers not found");
    window.PROMPT_CONFIG = { sections: [] };
    return;
  }

  const itemById = new Map(dict.items.map(i => [i.id, i]));

  function buildField(containerId, item) {
    const fieldKey = `${containerId}.${item.id}`;

    if (item.type === "select") {
      const options = [
        { id: "", label: "" },
        ...(item.options || []).map(opt => ({
          // namespaced so ids stay unique across fields (saved presets rely on these)
          id: `${item.id}.${opt.id}`,
          label: opt.label || ""
        }))
      ];

      return {
        key: fieldKey,
        type: "select",
        label: item.label || "",
        options
      };
    }

    // text input
    return {
      key: fieldKey,
      type: "text",
      label: item.label || "",
      placeholder: item.placeholder || ""
    };
  }

  const sections = struct.containers.map(c => {
    const fields = (c.items || [])
      .map(itemId => itemById.get(itemId))
      .filter(Boolean)
      .map(item => buildField(c.id, item));

    return {
      id: c.id,
      icon: c.icon || null,
      label: c.label || c.id,
      fields
    };
  });

  window.PROMPT_CONFIG = { sections };
})();
