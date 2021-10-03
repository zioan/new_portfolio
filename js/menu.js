const home = document.getElementById("home");
const about = document.getElementById("about");
const resume = document.getElementById("resume");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

export function enMenu() {
  home.innerText = "HOME";
  about.innerText = "ABOUT";
  resume.innerText = "RESUME";
  portfolio.innerText = "PORTFOLIO";
  contact.innerText = "CONTACT";
}

export function deMenu() {
  home.innerText = "START";
  about.innerText = "ÜBER MICH";
  resume.innerText = "ZUSAMMENFASSUNG";
  portfolio.innerText = "MAPPE";
  contact.innerText = "KONTAKT";
}
