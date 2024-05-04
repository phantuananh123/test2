const idgame = document.getElementById("listGame");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let page = 1;
const getDatagame = async (query) => {
  let url = `https://steam-api-dot-cs-platform-306304.et.r.appspot.com/games?page=${page}&limit=10`;
  if (query) {
    url += `&q=${query}`;
  }
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  console.log("data", data);
  return data;
};
const renderDatagame = async () => {
  const data = await getDatagame();
  const listGame = document.getElementById("listGame");
  const ullistGame = listGame.children[0];

  data.data.forEach((element) => {
    const x = document.createElement("li");
    console.log(x);
    x.innerHTML = `${element.name}`;
    ullistGame.appendChild(x);
  });

  return data;
};
const prev = async () => {
  if (page > 1) {
    page--;
  }
  getDatagame();
};
const next = async () => {
  page++;
  getDatagame();
};
getDatagame();
renderDatagame();
