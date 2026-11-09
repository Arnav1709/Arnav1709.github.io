import "@fontsource/commit-mono/400.css";
import "@fontsource/commit-mono/700.css";
import "./style.css";

const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const ids = tabs.map((t) => t.dataset.tab);
const page = document.getElementById("page");
const urlPath = document.getElementById("url-path");

function show(id, focusTab = false) {
  if (!ids.includes(id)) id = "home";
  for (const t of tabs) {
    const on = t.dataset.tab === id;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    if (on && focusTab) t.focus();
  }
  for (const p of panels) p.hidden = p.id !== id;
  const title = tabs.find((t) => t.dataset.tab === id).querySelector(".t-title").textContent;
  urlPath.textContent = id === "home" ? "" : `/${id}`;
  document.title = id === "home" ? "Arnav Kumar" : `${title} · Arnav Kumar`;
  page.scrollTop = 0;
}

// The URL hash is the source of truth, so back/forward and shared links work.
const go = (id) => {
  if (location.hash.slice(1) === id) show(id);
  else location.hash = id;
};
addEventListener("hashchange", () => show(location.hash.slice(1)));
show(location.hash.slice(1));

for (const t of tabs) t.addEventListener("click", () => go(t.dataset.tab));

// Arrow keys move between vertical (or, on phones, horizontal) tabs.
document.querySelector('[role="tablist"]').addEventListener("keydown", (e) => {
  const i = tabs.indexOf(document.activeElement);
  if (i < 0) return;
  const next = { ArrowDown: i + 1, ArrowRight: i + 1, ArrowUp: i - 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
  if (next === undefined) return;
  e.preventDefault();
  const t = tabs[(next + tabs.length) % tabs.length];
  go(t.dataset.tab);
  t.focus();
});

// ⌘1–6 / Ctrl+1–6, like a real browser.
addEventListener("keydown", (e) => {
  if (!(e.metaKey || e.ctrlKey) || e.altKey || e.shiftKey) return;
  const n = Number(e.key);
  if (n >= 1 && n <= tabs.length) {
    e.preventDefault();
    go(ids[n - 1]);
  }
});

// The async Clipboard API is blocked on plain-http origins and in some embedded
// browsers, so fall back to the legacy execCommand copy there.
async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const prev = document.activeElement;
    const ta =Object.assign(document.createElement("textarea"), { value: text, readOnly: true });
    ta.style.cssText = "position:fixed;opacity:0";
    document.body.append(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    prev?.focus();
    return ok;
  }
}

const copyBtn = document.getElementById("copy-link");
copyBtn.addEventListener("click", async () => {
  copyBtn.textContent = (await copy(location.href)) ? "Copied" : "Copy failed";
  document.getElementById("copy-status").textContent = copyBtn.textContent;
  setTimeout(() => (copyBtn.textContent = "Copy link"), 1600);
});

// 85 pull requests, 77 merged: one square each.
const waffle = document.getElementById("waffle");
waffle.append(
  ...Array.from({ length: 85 }, (_, i) => {
    const s = document.createElement("span");
    s.style.setProperty("--i", i);
    if (i >= 77) s.className = "other";
    return s;
  }),
);
