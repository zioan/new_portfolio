import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");


export function about_de() {
  contentArea.innerHTML = `
  <div class = "align">${database.information.aboutContentDe}</div>
  `
}
