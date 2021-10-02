import { enMenu, deMenu } from "./menu.js";
import {home} from "../pages/home.js";
import {home_de} from "../pages/home_de.js";
import {about} from "../pages/about.js";
import {about_de} from "../pages/about_de.js";
import {resume_de} from "../pages/resume_de.js";

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
    menuItem.forEach((item)=> {
      item.classList.remove("active");
    })
    menuItem[0].classList.add('active');

    enMenu();
    home();
  } else if (language.textContent === "EN") {
    language.innerText = "DE";

    // reset active menu item
    menuItem.forEach((item)=> {
      item.classList.remove("active");
    })
    menuItem[0].classList.add('active');


    deMenu();
    home_de();
  }
}

function activeClass (){  
  const menuLength = menuItem.length;

  function removeActive(){
    menuItem.forEach((item)=> {
      item.classList.remove("active");
    })
  }
 
  for (let i = 0; i<menuLength; i++){
    menuItem[i].addEventListener("click", () => {
      removeActive();
      menuItem[i].classList.add("active");
      // DE content
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "START"){
        home_de()
      }
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "ÜBER MICH"){
        about_de()
      }
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "ZUSAMMENFASSUNG"){
        resume_de()
      }
      //EN content
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "HOME"){
        home()
      }
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "ABOUT"){
        about()
      }
    });
  }
}
activeClass();



