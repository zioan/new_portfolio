const contentArea = document.querySelector(".app-content");

export default function german() {
  fetch("../data/de.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title} : ${post.body}</li>`;
      });

      contentArea.innerHTML = output;
      console.log("fetch DE");
    })
    .catch((err) => console.log(err));
}
