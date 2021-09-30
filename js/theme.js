const themeToggler = document
  .querySelector(".toggler-theme")
  .addEventListener("click", changeTheme);
const themeIcon = document.getElementById("theme-icon");

function changeTheme() {
  if (themeIcon.classList.contains("fa-moon")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    document.documentElement.setAttribute("data-theme", "light");
  } else if (themeIcon.classList.contains("fa-sun")) {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    document.documentElement.setAttribute("data-theme", "not defined");
  }
}
