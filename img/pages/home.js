import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function home() {
  contentArea.innerHTML = `
  <div class = "align">${database.information.aboutContent}</div>
  `
}
