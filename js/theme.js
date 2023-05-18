import { LOCAL_THEME_KEY } from "./script.js";

export function setLocalTheme() {
  if (window.localStorage && window.localStorage.getItem(LOCAL_THEME_KEY)) {
    setTheme(window.localStorage.getItem(LOCAL_THEME_KEY));
  } else {
    setTheme("device");
  }
}

export function setTheme(theme) {
  window.localStorage.setItem(LOCAL_THEME_KEY, theme);
  renderTheme(theme);
}

function renderTheme(theme) {
  let html = document.documentElement;
  html.dataset.theme = theme;

  if (theme === "device") {
    let systemDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    html.dataset.colorScheme = systemDarkTheme ? "dark" : "light";
  } else {
    html.dataset.colorScheme = theme;
  }
}
