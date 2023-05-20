import { setLocalTheme, setTheme } from "./theme.js";
import { usePrism } from "./prism/prism.js";
import { snippets } from "./snippets/snippets.js";

export const LOCAL_THEME_KEY = "savedTheme";
const themeButtons = document.querySelectorAll("[data-theme-button]");
const navToggleButton = document.querySelector(".nav-toggle-button");
const snippetsWraper = document.querySelector(".snippets-wraper");
const codeDialog = document.querySelector("[data-code-dialog]");

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

//snippets

snippets.forEach((snippet) => {
  console.log(snippet.title);
  snippetsWraper.append(snippetItem(snippet));
});

function snippetItem(snippet) {
  const li = document.createElement("li");
  li.classList.add("snippet");
  li.textContent = snippet.title;
  li.addEventListener("click", () => {
    codeDialog.querySelector("code").innerHTML = snippet.code;
    usePrism();
    codeDialog.showModal();
  });
  return li;
}
