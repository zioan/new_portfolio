import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function home() {
  contentArea.innerHTML = `
  <h1>${database.home.title}</h1>
  <div class = "align">${database.home.description}</div>
  `
}
