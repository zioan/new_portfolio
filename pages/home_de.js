import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function home_de() {
  contentArea.innerHTML = `
  <h1>${database.home_de.title}</h1>
  <div class = "align">${database.home_de.description}</div>
  `
}
