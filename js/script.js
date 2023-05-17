import { usePrism } from "./prism/prism.js";

const LOCAL_THEME_KEY = "savedTheme";
const themeButtons = document.querySelectorAll("[data-theme-button]");
const navToggleButton = document.querySelector(".nav-toggle-button");

function setLocalTheme() {
  if (window.localStorage && window.localStorage.getItem(LOCAL_THEME_KEY)) {
    setTheme(window.localStorage.getItem(LOCAL_THEME_KEY));
  } else {
    setTheme("device");
  }
}

function setTheme(theme) {
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

themeButtons.forEach((themeButton) => {
  themeButton.addEventListener("click", () => {
    let theme = themeButton.dataset.themeButton.toLowerCase();
    setTheme(theme);
  });
});

navToggleButton.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});

setLocalTheme();
usePrism({ window: window, document: document });
console.log(usePrism);
setTimeout(() => {
  document.querySelector("code").textContent =
    "const x = {\n hello: 'world'\n}";
  usePrism({ window: window, document: document });
}, 1000);
