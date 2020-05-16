const buttonOne = document.querySelector("button");
const container = document.querySelector(".container");

function getPost(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    callback(response);
  });

  xhr.addEventListener("error", () => {
    console.log("error");
  });

  xhr.send();
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("cardBody");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = post.title;
    const article = document.createElement("p");
    article.classList.add("card-article");
    article.textContent = post.body;
    cardBody.appendChild(title);
    cardBody.appendChild(article);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

buttonOne.addEventListener("click", (e) => {
  getPost(renderPosts);
});
