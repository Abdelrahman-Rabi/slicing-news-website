const articles = document.querySelectorAll(".article");
const background = document.querySelector(".slider-background");
const title = document.querySelector("#title");

const defultArticle = () => {
  const item = articles[0];
  articles.forEach((item) => {
    item.classList.remove("selected");
  });
  item.classList.add("selected");

  let articleTitle = null;
  for (var i = 0; i < item.children.length; i++) {
    if (item.children[i].className == "article-tile") {
      articleTitle = item.children[i];
      break;
    }
  }
  title.innerHTML = articleTitle.innerHTML;

  let articleIMG = null;
  for (var i = 0; i < item.children.length; i++) {
    if (item.children[i].className == "img-container") {
      articleIMG = item.children[i].children[0].src;
      break;
    }
  }
  console.log(background);
  background.style.backgroundImage = `url(${articleIMG})`;
};

articles.forEach((item) => {
  item.addEventListener("click", () => {
    articles.forEach((item) => {
      item.classList.remove("selected");
    });
    item.classList.add("selected");

    let articleTitle = null;
    for (var i = 0; i < item.children.length; i++) {
      if (item.children[i].className == "article-tile") {
        articleTitle = item.children[i];
        break;
      }
    }
    title.innerHTML = articleTitle.innerHTML;

    let articleIMG = null;
    for (var i = 0; i < item.children.length; i++) {
      if (item.children[i].className == "img-container") {
        articleIMG = item.children[i].children[0].src;
        break;
      }
    }
    console.log(background);
    background.style.backgroundImage = `url(${articleIMG})`;
  });
});

defultArticle();
