let cards = document.querySelector(".cards");

let search = document.querySelector(".search");

search.addEventListener("input", (e) => {
  cards.innerHTML = "";
  let text = e.target.value.toLowerCase();

  console.log(text);

  async function buks() {
    let res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}&startIndex=20&maxResults=6&orderBy=newest`
    );
    let books = res.data?.items;
    books.forEach((e) => {
      let grid = `<div class="card">
            <div class="img">
                <img src="${e.volumeInfo.imageLinks?.smallThumbnail}" alt="">
            </div>
            <div class="c-texts">
              <h2>${e.volumeInfo.title}</h2>
              <p>${e.volumeInfo.authors}</p>
              <p>${e.volumeInfo.publishedDate.slice(0, 5)}</p>
            </div>
            <div class="c-btns">
              <a class="bookmark" href="#">Bookmark</a>
              <a class="more-info" href="#">More Info</a>
              <a class="read" href="#">Read</a>
            </div>
          </div>`;

      cards.innerHTML += grid;
    });

    console.log(res.data.items);
  }

  buks();
});

async function buks() {
  let res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=python&startIndex=20&maxResults=6&orderBy=newest`
  );
  let books = res.data?.items;
  books.forEach((e) => {
    let grid = `<div class="card">
            <div class="img">
                <img src="${e.volumeInfo.imageLinks?.smallThumbnail}" alt="">
            </div>
            <div class="c-texts">
              <h2>${e.volumeInfo.title}</h2>
              <p>${e.volumeInfo.authors}</p>
              <p>${e.volumeInfo.publishedDate}</p>
            </div>
            <div class="c-btns">
              <a class="bookmark" href="#">Bookmark</a>
              <a class="more-info" href="#">More Info</a>
              <a class="read" href="#">Read</a>
            </div>
          </div>`;

    cards.innerHTML += grid;
  });

  console.log(res.data.items);
}

buks();

let logOut = document.querySelector(".logout");

logOut.addEventListener("click", () => {
  localStorage.removeItem("token");
});
