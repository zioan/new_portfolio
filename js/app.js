import { enMenu, deMenu, mobileMenu } from "./menu.js";
import { home } from "../pages/home.js";
import { home_de } from "../pages/home_de.js";
import { about } from "../pages/about.js";
import { about_de } from "../pages/about_de.js";
import { resume_de } from "../pages/resume_de.js";
import { resume_en } from "../pages/resume.js";
import { portfolio_de } from "../pages/portfolio_de.js";
import { portfolio } from "../pages/portfolio.js";
import { contact } from "../pages/contact.js";
import { contact_de } from "../pages/contact_de.js";

const languageToggler = document
  .querySelector(".toggler-language")
  .addEventListener("click", changeLanguage);
const language = document.querySelector(".language");
const menuItem = document.querySelectorAll(".menu-item");

// Initial content (DE)
if (language.textContent === "DE") {
  home_de();
}

function changeLanguage() {
  if (language.textContent === "DE") {
    language.innerText = "EN";

    // reset active menu item
    menuItem.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem[0].classList.add("active");

    enMenu();
    home();
  } else if (language.textContent === "EN") {
    language.innerText = "DE";

    // reset active menu item
    menuItem.forEach((item) => {
      item.classList.remove("active");
    });
    menuItem[0].classList.add("active");

    deMenu();
    home_de();
  }
}

function activeClass() {
  const menuLength = menuItem.length;

  function removeActive() {
    menuItem.forEach((item) => {
      item.classList.remove("active");
    });
  }

  for (let i = 0; i < menuLength; i++) {
    menuItem[i].addEventListener("click", () => {
      removeActive();
      menuItem[i].classList.add("active");
      // DE content
      if (menuItem[i].innerText === "START") {
        home_de();
      }
      if (menuItem[i].innerText === "ÜBER MICH") {
        about_de();
      }
      if (menuItem[i].innerText === "ZUSAMMENFASSUNG") {
        resume_de();
      }
      if (menuItem[i].innerText === "MAPPE") {
        portfolio_de();
      }
      if (menuItem[i].innerText === "KONTAKT") {
        contact_de();
      }

      //EN content
      if (menuItem[i].innerText === "HOME") {
        home();
      }
      if (menuItem[i].innerText === "ABOUT") {
        about();
      }
      if (menuItem[i].innerText === "RESUME") {
        resume_en();
      }
      if (menuItem[i].innerText === "PORTFOLIO") {
        portfolio();
      }
      if (menuItem[i].innerText === "CONTACT") {
        contact();
      }

      mobileMenu();
    });
  }
}
activeClass();
