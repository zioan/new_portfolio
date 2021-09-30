const home = document.getElementById("home");
const about = document.getElementById("about");
const resume = document.getElementById("resume");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

export function enMenu() {
  home.innerText = "else";
  about.innerText = "2";
  resume.innerText = "3";
  portfolio.innerText = "asd";
  contact.innerText = "asdfg";
}

export function deMenu() {
  home.innerText = "home_de";
  about.innerText = "about_de";
  resume.innerText = "resume_de";
  portfolio.innerText = "posrtfolio_de";
  contact.innerText = "asdfg";
}
