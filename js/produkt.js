const params = new URLSearchParams(window.location.search);
const produktelement = document.querySelector('.product-layout');
const id = params.get("id");

fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((product) => {
    console.log(product);
    produktelement.innerHTML = `
      <figure >
       <div class="faver">
        <img src="${product.thumbnail}" alt="${product.title}" />
       
        </div>
      </figure>

      <section class="hvid">
       <h3>${product.title}</h3>
      <div>
      
      <p>Price:</p>
      <p>${product.price} DKK</p>
      </div>
        
        <form>
          <select class="size" name="size" id="size">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
        
          </select>
          <button type="submit" class="cart-btn">Add to cart</button>
        </form>
      </section>

      <section class="info">
        <h2>Product Information</h2>
        <dl>
          <dt>Category</dt>
          <dd>${product.category}</dd>
          <dt>Description</dt>
          <dd>${product.description}</dd>
          
        <p><span>Brand:</span> ${product.brand} </p>
          
        </dl>
      </section>`;
  })
  .catch((error) => {
    console.error("Error fetching product:", error);
    productListeContainer.innerHTML = "<p>Could not fetch product data.</p>";
  });
