import german from "./language_de.js";
import english from "./language_en.js";
import { enMenu, deMenu } from "./menu.js";

const languageToggler = document
  .querySelector(".toggler-language")
  .addEventListener("click", changeLanguage);
const language = document.querySelector(".language");

if (language.textContent === "DE") {
  german();
}

function changeLanguage() {
  if (language.textContent === "DE") {
    language.innerText = "EN";
    english();
    enMenu();
  } else if (language.textContent === "EN") {
    language.innerText = "DE";
    german();
    deMenu();
  }
}
