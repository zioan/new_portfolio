import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const data = database.portfolio;

const portfolioData = data.map(item =>
  `<div class = "portfolio-item">
  <a href = "${item.url}" target = "_blank"><img src = "${item.imageUrl}" alt = "${item.title} - ${database.information.name} Portfolio Project"></a>
    <br>
    <a class = "left-align" href = "${item.url}" target = "_blank"><h4>${item.title}</h4></a>
      ${item.subtitle}
    <div>
      
  
      <a class = "github-code left-align" href = "${item.github}" target = "_blank">Source code on GitHub</a>
      <div></div>
    </div>
  </div>
  `  
)

export function portfolio() {

  contentArea.innerHTML = `
    <div class = "content-area">
    <h2>PORTFOLIO</h2>
    <div class = "underline"></div>
    <div class = "portfolio">
      ${portfolioData.join('')}
    </div>

  </div>
  `
}