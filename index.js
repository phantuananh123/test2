const idgame = document.getElementById("listGame");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const searchBtn = document.getElementById("searchGourp");
const input = document.getElementById("input");
let page = 1;
const getDatagame = async (query) => {
  let url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?page=${page}&limit=10`;
  if (query) {
    url += `&q=${query}`;
  }
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  const listGame = document.getElementById("listGame");
  const ullistGame = listGame.children[0];
  ullistGame.innerHTML = "";
  data.data.forEach((element) => {
    const x = document.createElement("li");
    x.innerHTML = `${element.name}`;
    ullistGame.appendChild(x);
  });

  return data;
};
const search = async () => {
  const inputValue = input.value;
  getDatagame(inputValue);
  console.log(inputValue);
};
const prev = async () => {
  if (page > 1) {
    page--;
  }
  getDatagame(page);
};
const next = async () => {
  page++;
  getDatagame(page);
};
getDatagame();
