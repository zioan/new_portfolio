import { database } from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const personalInfo = database.information.personal;

export function about() {
  contentArea.innerHTML = `
  <div class = "content-area">
      <h2>ABOUT ME</h2>
      <div class = "underline"></div>
      <div class = "about-area">
      <img class = "about-photo" src="../img/me3.jpg" alt="Ioan Zaharia about photo" />
        <div class = "about-area-description">
          <div class = "align">
            <h3>I am <span class = "main-color">Ioan Zaharia</span></h3>
            ${database.information.aboutContent}
          </div>
          <br>
          <ul>
            <li class = "personal-info"><strong>Full Name:</strong> ${database.information.name}</li>
            <li class = "personal-info"><strong>Adress:</strong> ${personalInfo.address}</li>
            <li class = "personal-info"><strong>Phone:</strong> ${personalInfo.phone}</li>
            <li class = "personal-info"><strong>Email:</strong> ${database.information.email}</li>
            <li class = "personal-info"><strong>Nationality:</strong> ${personalInfo.nationality}</li>
            <li class = "personal-info"><strong>Date of birth:</strong> ${personalInfo.birth}</li>
            <li class = "personal-info"><strong>Languages:</strong> ${personalInfo.language}</li>
          </ul>
        </div>
      </div>
  </div>
  `;
}
