// import german from "./language_de.js";
// import english from "./language_en.js";
import { enMenu, deMenu } from "./menu.js";
import {home} from "../pages/home.js";
import {home_de} from "../pages/home_de.js";

const languageToggler = document
  .querySelector(".toggler-language")
  .addEventListener("click", changeLanguage);
const language = document.querySelector(".language");

if (language.textContent === "DE") {
  home_de();
}

function activeClass (){
  
  const menuItem = document.querySelectorAll(".menu-item");
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

