import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function home_de() {
  contentArea.innerHTML = `
  <div class = "align">${database.information.aboutContentDe}</div>
  `
}
