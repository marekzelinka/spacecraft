import { data } from "./data.js";

const list = document.querySelector("#list");
const search = document.querySelector("#app-search");

function cleanupWord(word) {
  return word.replace(/( )+/g, " ").toLowerCase().trim();
}

function filterData(word) {
  return data.filter((item) => item.spacecraft.toLowerCase().includes(word));
}

function render(word = "") {
  list.innerHTML = "";

  word = cleanupWord(word);

  const filtered = filterData(word);
  filtered.forEach((item) =>
    list.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`)
  );
}

render();

search.addEventListener("input", () => render(search.value));
