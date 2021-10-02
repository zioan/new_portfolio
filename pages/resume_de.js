import {database} from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const resume = database.experience.workingExperienceDe;
const education = database.experience.educationExperienceDe;


export function resume_de() {

  contentArea.innerHTML = `
    <div class = "content-area">
      <h2>MEINE FÄHIGKEITEN</h2>
      <div class = "underline"></div>
    
      <h4>HTML5</h4>
      <h4>CSS3</h4>
      <h4>Javascript</h4>
      <h4>WordPress</h4>
      <h4>Git</h4>
      <h4>SASS</h4>
      <h4>ReactJS</h4>
      <br>
      <br>
      <h2>LEBENSLAUF</h2>
      <div class = "underline"></div>
      <br>
      
      <h3><i class="fas fa-briefcase pr1"></i>Berufserfahrung</h3>
      <div class = "resume-section">
      <br>
        <div class = "resume-item">${resume[0].year} <div class = "resume-data"><h4>${resume[0].position}</h4> <br> ${resume[0].company} <br> ${resume[0].details}</div> </div>
        <div class = "resume-item">${resume[1].year} <div class = "resume-data"><h4>${resume[1].position}</h4> <br> ${resume[1].company} <br> ${resume[1].details}</div> </div>
        <div class = "resume-item">${resume[2].year} <div class = "resume-data"><h4>${resume[2].position}</h4> <br> ${resume[2].company} <br> ${resume[2].details}</div> </div>
        <div class = "resume-item">${resume[3].year} <div class = "resume-data"><h4>${resume[3].position}</h4> <br> ${resume[3].company} <br> ${resume[3].details}</div> </div>
      </div>
      <br>
      <h3><i class="fas fa-book pr1"></i>Schulabschluss/Ausbildung</h3>
      <br>
      <div class = "resume-item">${education[0].year} <div class = "resume-data"><h4>${education[0].graduation}</h4> </div> </div>
      <div class = "resume-item">${education[1].year} <div class = "resume-data"><h4>${education[1].graduation}</h4> </div> </div>
  </div>
  `
}