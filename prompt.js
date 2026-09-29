// prompt.js (CONTAINER PROMPT)

window.buildPrompt = function buildPrompt() {
  const BRAND_PREFIX = "with text";
  const NEGATIVE_PREFIX = "no";
  const EMPTY_PROMPT = "Your prompt will appear here.";

  const sections = window.PROMPT_CONFIG?.sections || [];
  const order = sections.map(s => s.id);
  const labelById = new Map(sections.map(s => [s.id, s.label]));
  const buckets = new Map(order.map(id => [id, []]));

  function push(sectionId, token) {
    if (!token) return;
    if (!buckets.has(sectionId)) buckets.set(sectionId, []);
    buckets.get(sectionId).push(token);
  }

  document.querySelectorAll("[data-key]").forEach(el => {
    const raw = (el.value || "").trim();
    if (!raw) return;

    const sectionId =
      el.closest("details.section-card[data-section-id]")?.dataset?.sectionId ||
      el.closest("[data-section-id]")?.dataset?.sectionId ||
      "";

    if (!sectionId) return;

    // itemId = part after the dot: main_subject.brand_text -> brand_text
    const itemId = el.dataset.key?.split(".")[1] || "";

    if (el.tagName === "SELECT") {
      push(sectionId, el.options[el.selectedIndex]?.textContent || raw);
      return;
    }

    // brand_text gets a "with text" prefix
    if (itemId === "brand_text") {
      push(sectionId, `${BRAND_PREFIX} "${raw}"`);
      return;
    }

    // negative_words: comma-separated, each gets a "no" prefix
    if (itemId === "negative_words") {
      raw
        .split(",")
        .map(s => s.trim())
        .filter(Boolean)
        .forEach(word => {
          const w = word.toLowerCase().startsWith(NEGATIVE_PREFIX + " ")
            ? word
            : `${NEGATIVE_PREFIX} ${word}`;
          push(sectionId, w);
        });
      return;
    }

    // plain text input
    push(sectionId, raw);
  });

  for (const [k, arr] of buckets.entries()) buckets.set(k, dedupeTokens(arr));

  const lines = [];
  for (const id of order) {
    const items = buckets.get(id) || [];
    if (!items.length) continue;
    lines.push(`${labelById.get(id) || id}: ${items.join(", ")}`);
  }

  const out = document.getElementById("promptOutput");
  out.textContent = lines.length ? lines.join("\n") : EMPTY_PROMPT;
};


function normalizeToken(v) {
  return String(v || "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/^[,\s]+|[,\s]+$/g, "")
    .trim();
}

function dedupeTokens(values) {
  const seen = new Set();
  const result = [];

  for (const raw of values) {
    const token = normalizeToken(raw);
    if (!token) continue;
    if (seen.has(token)) continue;
    seen.add(token);
    result.push(raw);
  }
  return result;
}
