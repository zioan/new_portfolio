const home = document.getElementById("home");
const about = document.getElementById("about");
const resume = document.getElementById("resume");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

export function enMenu() {
  home.innerText = "Home";
  about.innerText = "About";
  resume.innerText = "Resume";
  portfolio.innerText = "Portfolio";
  contact.innerText = "Contact";
}

export function deMenu() {
  home.innerText = "Start";
  about.innerText = "Über mich";
  resume.innerText = "Zusammenfassung";
  portfolio.innerText = "Portfolio";
  contact.innerText = "Kontakt";
}
