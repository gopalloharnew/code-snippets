import { setLocalTheme, setTheme } from "./theme.js";
import { usePrism } from "./prism/prism.js";
import { snippets } from "./snippets/snippets.js";

export const LOCAL_THEME_KEY = "savedTheme";
const themeButtons = document.querySelectorAll("[data-theme-button]");
const navToggleButton = document.querySelector(".nav-toggle-button");
const snippetsWraper = document.querySelector(".snippets-wraper");
const codeDialog = document.querySelector("[data-code-dialog]");
const codeElement = document.querySelector(".code-element");
const copyCodeButton = document.querySelector(".copy-code-button");

let copyTimeout;

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
  snippetsWraper.append(snippetItem(snippet));
});

function openDialog(snippet) {
  codeElement.innerHTML = snippet.code;
  copyCodeButton.classList.remove("copy-code-success");

  [...codeElement.classList].forEach((className) => {
    let isClassNameOfPrism = /^language-.*/.test(className);
    if (isClassNameOfPrism) {
      codeElement.classList.remove(className);
    }
    codeElement.classList.add(`language-${snippet.language}`);
  });

  codeDialog.querySelector(".code-snippet-title").innerHTML = snippet.title;
  usePrism();
  codeDialog.showModal();
}

function snippetItem(snippet) {
  const li = document.createElement("li");
  li.classList.add("snippet");
  li.textContent = snippet.title;
  li.addEventListener("click", () => {
    openDialog(snippet);
  });
  return li;
}

codeDialog.addEventListener("click", (e) => {
  const dialogDimensions = codeDialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom ||
    e.target.closest(".close-dialog-button")
  ) {
    codeDialog.close();
  }
});

copyCodeButton.addEventListener("click", async () => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      navigator.clipboard.writeText(codeElement.innerText);
    } catch (error) {
      console.log(error.message);
    }
  } else {
    const textarea = document.createElement("textarea");
    textarea.classList.add("hidden");
    textarea.value = codeElement.innerText;
    codeDialog.append(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand("copy");
    textarea.remove();
  }
  copyCodeButton.classList.add("copy-code-success");
  clearTimeout(copyTimeout);
  copyTimeout = setTimeout(() => {
    copyCodeButton.classList.remove("copy-code-success");
  }, 1000);
});
