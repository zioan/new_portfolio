// import german from "./language_de.js";
// import english from "./language_en.js";
import { enMenu, deMenu } from "./menu.js";
import {home} from "../pages/home.js";
import {home_de} from "../pages/home_de.js";
import {about} from "../pages/about.js";
import {about_de} from "../pages/about_de.js";

const languageToggler = document
  .querySelector(".toggler-language")
  .addEventListener("click", changeLanguage);
const language = document.querySelector(".language");
const menuItem = document.querySelectorAll(".menu-item");

// Initial content (DE)
if (language.textContent === "DE") {
  home_de();
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
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "Start"){
        home_de()
      }
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "Über mich"){
        about_de()
      }
      //EN content
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "Home"){
        home()
      }
      if (menuItem[i].classList.contains('active') && menuItem[i].innerText === "About"){
        about()
      }
    });
  }
}

activeClass();


function changeLanguage() {
  if (language.textContent === "DE") {
    language.innerText = "EN";
    // english();
    enMenu();
    home();
  } else if (language.textContent === "EN") {
    language.innerText = "DE";
    // german();
    deMenu();
    home_de();
  }
}

