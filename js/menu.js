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

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-nav");

hamburger.addEventListener("click", mobileMenu);

export function mobileMenu() {
    hamburger.classList.toggle("active-menu");
    navMenu.classList.toggle("active-menu");

    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
        hamburger.classList.remove("active-menu");
        navMenu.classList.remove("active-menu");
    }
}
