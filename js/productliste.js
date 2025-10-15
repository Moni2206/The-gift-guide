const main = document.querySelector("main");
const navContainer = document.querySelector(".mennav");

// Kategorier
const mensCategories = ["Mens-shirts", "Mens-shoes", "Mens-watches"];
const womensCategories = ["Beauty", "Womens-bags", "Womens-dresses", "Womens-jewellery", "Womens-shoes", "Womens-watches", "Tops"];

// Læs URL-parametre
const params = new URLSearchParams(window.location.search);
const section = params.get("section"); // "him" eller "her"
const category = params.get("category"); // specifik kategori hvis valgt

// Funktion til at hente produkter
function fetchCategories(categories, specificCategory = null) {
  if (specificCategory) {
    return fetch(`https://dummyjson.com/products/category/${specificCategory}`)
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((err) => {
        console.error(err);
        return [];
      });
  } else {
    return Promise.all(
      categories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => data.products)
          .catch((err) => {
            console.error(err);
            return [];
          })
      )
    ).then((results) => results.flat());
  }
}

// Funktion til at lave HTML for sektion
function createSection(title, products) {
  const sectionEl = document.createElement("section");
  sectionEl.innerHTML = `
    <h2 class="section-title">${title}</h2>
    <div class="productlist">
      ${products
        .map(
          (product) => `
        <article class="hvid">
    
          <div class="rabat">${product.discountPercentage}%</div>
          <div class="faver">
            <img src="${product.thumbnail}" alt="${product.title}" />
          </div>
          <div class="green">
            <h3>${product.title}</h3>
            <p>Price: ${Math.round(product.price - (product.price * product.discountPercentage) / 100)},-</p>
            <a href="#">Read more</a>
          </div>
        </article>
      `
        )
        .join("")}
    </div>
  `;
  main.innerHTML = ""; // ryd main først
  main.appendChild(sectionEl);
}

// Funktion til at opdatere knapperne dynamisk
function updateNavButtons() {
  let buttons = [];
  if (section === "her") {
    buttons = womensCategories.map((cat) => ({
      text: cat.replace(/-/g, " "),
      link: `productliste.html?section=her&category=${cat}`,
    }));
  } else {
    buttons = mensCategories.map((cat) => ({
      text: cat.replace(/-/g, " "),
      link: `productliste.html?section=him&category=${cat}`,
    }));
  }
  navContainer.innerHTML = buttons.map((btn) => `<a href="${btn.link}">${btn.text}</a>`).join("");
}

// Opdater knapperne først
updateNavButtons();

// Hent og vis produkter
const categoriesToFetch = section === "her" ? womensCategories : mensCategories;
fetchCategories(categoriesToFetch, category).then((products) => {
  createSection(section === "her" ? "For Her" : "For Him", products);
});
