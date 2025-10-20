// productliste.js - fuld version med debugging og fallback
const main = document.querySelector("main");
const navContainer = document.querySelector(".mennav");

// Debug: sikre at elementerne findes
console.log("productliste.js loaded");
console.log("main:", main);
console.log("navContainer:", navContainer);

// Kategorier
const mensCategories = ["Mens-shirts", "Mens-shoes", "Mens-watches"];
const womensCategories = ["Beauty", "Womens-bags", "Womens-dresses", "Womens-jewellery", "Womens-shoes", "Womens-watches", "Tops"];

// Læs URL-parametre
const params = new URLSearchParams(window.location.search);
const section = params.get("section"); // "him" eller "her"
const category = params.get("category"); // specifik kategori hvis valgt
console.log("URL params:", { section, category });

// Hvis navContainer eller main ikke findes — stop og log fejl
if (!navContainer) {
  console.error("Kunne ikke finde .mennav - tjek at HTML har <nav class='mennav'>");
}
if (!main) {
  console.error("Kunne ikke finde <main> elementet i DOM.");
}

// Funktion til at hente produkter
function fetchCategories(categories, specificCategory = null) {
  if (specificCategory) {
    return fetch(`https://dummyjson.com/products/category/${specificCategory}`)
      .then((res) => res.json())
      .then((data) => data.products)
      .catch((err) => {
        console.error("Fetch error (specificCategory):", err);
        return [];
      });
  } else {
    return Promise.all(
      categories.map((cat) =>
        fetch(`https://dummyjson.com/products/category/${cat}`)
          .then((res) => res.json())
          .then((data) => data.products)
          .catch((err) => {
            console.error("Fetch error (category):", cat, err);
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
  // ryd main først
  if (main) {
    main.innerHTML = "";
    main.appendChild(sectionEl);
  } else {
    console.warn("main er ikke fundet - kan ikke tilføje sektion");
  }
}

// Opdater knapperne dynamisk — tilføjer klasser og 'active'
function updateNavButtons() {
  if (!navContainer) return;

  let buttons = [];
  if (section === "her") {
    buttons = womensCategories.map((cat) => ({
      text: cat.replace(/-/g, " "),
      link: `productliste.html?section=her&category=${encodeURIComponent(cat)}`,
      active: category === cat,
    }));
  } else {
    buttons = mensCategories.map((cat) => ({
      text: cat.replace(/-/g, " "),
      link: `productliste.html?section=him&category=${encodeURIComponent(cat)}`,
      active: category === cat,
    }));
  }

  // Lav HTML med klasse-nav og category-btn
  navContainer.innerHTML = buttons
    .map(
      (btn) =>
        `<a href="${btn.link}" class="category-btn ${btn.active ? "active" : ""}" aria-current="${btn.active ? "page" : "false"}">
          ${btn.text}
        </a>`
    )
    .join("");

  navContainer.classList.add("category-nav");

  // Debug: vis den genererede HTML i konsollen
  console.log("Genererede knapper:", navContainer.innerHTML);
}

// Opdater knapperne først
updateNavButtons();

// Hent og vis produkter
const categoriesToFetch = section === "her" ? womensCategories : mensCategories;
fetchCategories(categoriesToFetch, category).then((products) => {
  console.log("Hentede produkter:", products && products.length);
  createSection(section === "her" ? "For Her" : "For Him", products);
});
