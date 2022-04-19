const container = document.querySelector(".container");

let limit = 6;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
  const response = await fetch(
    `http://localhost:8080/user?_limit=${limit}$_page=${pageCount}`
  );
  // console.log(response);
  const data = await response.json();
  console.log(data);

  data.map((currentElement, index) => {
    const htmlData = `
         <div class="box">
         <p class="post-id">${postCount++} </p>
          <h2 class="title">${currentElement.title}</h2>
        </div>`;

    container.insertAdjacentHTML("beforeend", htmlData);
  });
};

getPost();

const showData = () => {
  setTimeout(() => {
    pageCount++;
    getPost();
  }, 300);
};

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("bottom");
    showData();
  }
});
