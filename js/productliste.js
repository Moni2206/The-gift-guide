const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.querySelector("h1").textContent = category;

const main = document.querySelector("main");

let allData, currentDataSet;

fetch(`https://dummyjson.com/products/category/${category}`)
  .then((res) => res.json())
  .then((data) => {
    allData = currentDataSet = data;
    showProducts(allData);
  });

function showProducts(data) {
  // Ryd main først
  main.innerHTML = `<h1 class="title">${category}</h1>
  <section class="productlist"></section>`;

  const productListeContainer = main.querySelector(".productlist");

  data.products.forEach((element) => {
    productListeContainer.innerHTML += `
      <article class="hvid">
        <div class="rabat">${element.discountPercentage}%</div>
        <div class="faver">
          <img src="${element.thumbnail}" alt="${element.title}" />
        </div>
        <div class="green">
          <h3>${element.title}</h3>
          <p>Price: ${Math.round(element.price - (element.price * element.discountPercentage) / 100)},-</p>
          <a href="#">Read more</a>
        </div>
      </article>
    `;
  });
}
