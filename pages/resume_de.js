import {database, workingExperienceDe} from "../data/database.js";
const contentArea = document.querySelector(".app-content");

const resume = workingExperienceDe;
const education = database.experience.educationExperienceDe;
const skills = database.skills;

const skillsData = skills.map(item =>
  `<div class="progress-circle over50 p${item.value}">
    <span>${item.title}</span>
    <div class="left-half-clipper">
      <div class="first50-bar"></div>
      <div class="value-bar"></div>
    </div>
  </div>`  
)


const resumeData = resume.map(item => 
  `<div class = "resume-item">${item.year} 
    <div class = "resume-data"><h4>${item.position}</h4> 
    <br> ${item.company} <br> ${item.details}</div></div><br>` 
)

const educationData = education.map(item =>
  `<div class = "resume-item">${item.year}<div class =        "resume-data"><h4>${item.graduation}</h4></div></div>`
  )



export function resume_de() {

  contentArea.innerHTML = `
    <div class = "content-area">
      <h2>MEINE FÄHIGKEITEN</h2>
      <div class = "underline"></div>
    
      <div class = "progress">
        ${skillsData.join('')}
      </div>
      
      <h2>LEBENSLAUF</h2>
      <div class = "underline"></div>
      
      <h3><i class="fas fa-briefcase pr1"></i>Berufserfahrung</h3>
      <div class = "resume-section">
      ${resumeData.join('')}       
      </div>

      <h3><i class="fas fa-book pr1"></i>Schulabschluss/Ausbildung</h3>
      ${educationData.join('')}
      
  </div>
  `
}