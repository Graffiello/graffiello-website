document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      title: "Canvas Tote Bag",
      price: "$18.00",
      image: "https://via.placeholder.com/400x300?text=Canvas+Tote"
    },
    {
      title: "Minimal Hoodie",
      price: "$45.00",
      image: "https://via.placeholder.com/400x300?text=Minimal+Hoodie"
    },
    {
      title: "Art Print Poster",
      price: "$25.00",
      image: "https://via.placeholder.com/400x300?text=Art+Print"
    },
    {
      title: "Whoimmal Mug",
      price: "$12.00",
      image: "https://via.placeholder.com/400x300?text=Mug"
    },
    {
      title: "Notebook Set",
      price: "$20.00",
      image: "https://via.placeholder.com/400x300?text=Notebook"
    },
    {
      title: "Organic Cotton T-Shirt",
      price: "$28.00",
      image: "https://via.placeholder.com/400x300?text=T-Shirt"
    }
  ];

  const productGrid = document.getElementById("productGrid");

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <div class="product-info">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">${product.price}</p>
      </div>
    `;

    productGrid.appendChild(card);
  });
});
