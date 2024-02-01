const quoteText = document.querySelector(".content");
const img = document.querySelector("img");
const button = document.querySelector(".button");

const loadData = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();

  quoteText.innerText = `${data.value}`;
  img.setAttribute("src", `${data.icon_url}`);
  console.log(img);
};

button.addEventListener("click", (event) => {
  loadData();
});
