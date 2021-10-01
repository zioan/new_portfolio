const contentArea = document.querySelector(".app-content");

export default function english() {
  fetch("../data/en.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
      data.forEach((post) => {
        output += `<li>${post.title} : ${post.body}</li>`;
      });

      contentArea.innerHTML = output;
      console.log("fetch EN");
    })
    .catch((err) => console.log(err));
}
