import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const personalInfoDe = database.information.personalDe;

export function about_de() {
  contentArea.innerHTML = `
    <div class = "content-area">
      <h2>ÜBER MICH</h2>
      <div class = "underline"></div>
      <div class = "about-area">
        <div class = wrapper>
          <img class = "about-photo" src="../img/me3.jpg" alt="Ioan Zaharia about photo" />
        </div>
        <div>
          <div class = "align">
          <h3>Ich bin <span class = "main-color">Ioan Zaharia</span></h3>
          ${database.information.aboutContentDe}
          </div>
          <br>
          <ul>
            <li class = "personal-info"><strong>Name:</strong> ${database.information.name}</li>
            <li class = "personal-info"><strong>Adresse:</strong> ${personalInfoDe.addressDe}</li>
            <li class = "personal-info"><strong>Handynummer:</strong> ${personalInfoDe.phoneDe}</li>
            <li class = "personal-info"><strong>Email:</strong> ${database.information.email}</li>
            <li class = "personal-info"><strong>Staatsangehörigkeit:</strong> ${personalInfoDe.nationalityDe}</li>
            <li class = "personal-info"><strong>Geburtsdaten:</strong> ${personalInfoDe.birthDe}</li>
            <li class = "personal-info"><strong>Sprachen:</strong> ${personalInfoDe.languageDe}</li>
          </ul>
        </div>
      </div>
  </div>
  `
}
