import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function home() {
  contentArea.innerHTML = `
  <div class = "content-area">
  <h1>${database.home.title1}<br>${database.home.title2}<span class = "main-color">${database.information.name}</span></h1>
  <div class = "text-center">${database.home.description}</div>
  </div>
  `
}
