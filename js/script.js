import { setLocalTheme, setTheme } from "./theme.js";
import { usePrism } from "./prism/prism.js";
import { snippets } from "./snippets/snippets.js";

export const LOCAL_THEME_KEY = "savedTheme";
const themeButtons = document.querySelectorAll("[data-theme-button]");
const navToggleButton = document.querySelector(".nav-toggle-button");

// theme
themeButtons.forEach((themeButton) => {
  themeButton.addEventListener("click", () => {
    let theme = themeButton.dataset.themeButton.toLowerCase();
    setTheme(theme);
  });
});

setLocalTheme();

// navToggleButton
navToggleButton.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("open");
});
