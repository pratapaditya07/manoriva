// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

document.getElementById("category-title").innerText = category.charAt(0).toUpperCase() + category.slice(1);

// Dummy product data
const products = {
    earrings: [
        { name: "Gold Hoop", img: "images/earring1.jpg" },
        { name: "Stud Earrings", img: "images/earring2.jpg" }
    ],
    necklaces: [
        { name: "Pearl Necklace", img: "images/necklace1.jpg" },
        { name: "Choker Set", img: "images/necklace2.jpg" }
    ],
    rings: [
        { name: "Diamond Ring", img: "images/ring1.jpg" },
        { name: "Ruby Ring", img: "images/ring2.jpg" }
    ]
};

const container = document.getElementById("product-container");

if (products[category]) {
    products[category].forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <p>${prod.name}</p>
        `;
        container.appendChild(div);
    });
} else {
    container.innerHTML = "<p>No products found.</p>";
}
