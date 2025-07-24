let body = document.querySelector("body");
let mouse = document.getElementById("explore_btn");

body.addEventListener("mousemove", (e) => {
    let scale = 1;
    if(e.target.classList.contains("imagesss")){
        scale = 2;
    }
        mouse.style.transform = `
            translateX(${e.clientX}px)
            translateY(${e.clientY}px)
            scale(${scale})
        `
    })

body.addEventListener("mouseout", (e) => {
    mouse.style.transform = `
        translateX(${e.clientX}px)
        translateY(${e.clientY}px)
        scale(0)
    `;
})


// Dummy product data with IDs for detail page
const products = {
    earrings: [
        { name: "Gold Hoop", img: "media/earrings/earring1.jpg", id: "gold-hoop" },
        { name: "Stud Earrings", img: "media/earrings/earring2.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring3.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring4.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring5.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring6.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring7.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring8.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring9.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/earrings/earring10.jpg", id: "stud-earrings" }
    ],

    handhelds: [
        { name: "Gold Hoop", img: "media/handhelds/handbag1.jpg", id: "gold-hoop" },
        { name: "Stud Earrings", img: "media/handhelds/handbag2.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag3.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag4.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag5.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag6.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag7.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag8.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag9.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/handhelds/handbag10.jpg", id: "stud-earrings" }
    ],
    necklaces: [
        { name: "Pearl Necklace", img: "media/necklaces/necklace1.jpg", id: "pearl-necklace" },
        { name: "Choker Set", img: "media/necklaces/necklace2.jpg", id: "choker-set" },
        { name: "Pearl Necklace", img: "media/necklaces/necklace3.jpg", id: "pearl-necklace" },
        { name: "Choker Set", img: "media/necklaces/necklace4.jpg", id: "choker-set" },
        { name: "Pearl Necklace", img: "media/necklaces/necklace5.jpg", id: "pearl-necklace" },
        { name: "Choker Set", img: "media/necklaces/necklace6.jpg", id: "choker-set" },
        { name: "Pearl Necklace", img: "media/necklaces/necklace7.jpg", id: "pearl-necklace" },
        { name: "Choker Set", img: "media/necklaces/necklace8.jpg", id: "choker-set" },
        { name: "Pearl Necklace", img: "media/necklaces/necklace9.jpg", id: "pearl-necklace" },
        { name: "Choker Set", img: "media/necklaces/necklace10.jpg", id: "choker-set" },

        
        
    ],

    bangles: [
        { name: "Stud Earrings", img: "media/bangles/bangle1.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle2.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle3.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle4.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle5.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle6.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle7.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle8.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle9.jpg", id: "stud-earrings" },
        { name: "Stud Earrings", img: "media/bangles/bangle10.jpg", id: "stud-earrings" },
    ],


    rings: [
        { name: "Diamond Ring", img: "media/rings/ring1.jpg", id: "diamond-ring" },
        { name: "Ruby Ring", img: "media/rings/ring2.jpg", id: "ruby-ring" },
        { name: "Diamond Ring", img: "media/rings/ring3.jpg", id: "diamond-ring" },
        { name: "Ruby Ring", img: "media/rings/ring4.jpg", id: "ruby-ring" },
        { name: "Diamond Ring", img: "media/rings/ring5.jpg", id: "diamond-ring" },
        { name: "Ruby Ring", img: "media/rings/ring6.jpg", id: "ruby-ring" },
        { name: "Diamond Ring", img: "media/rings/ring7.jpg", id: "diamond-ring" },
        { name: "Ruby Ring", img: "media/rings/ring8.jpg", id: "ruby-ring" },
        { name: "Diamond Ring", img: "media/rings/ring9.jpg", id: "diamond-ring" },
        { name: "Ruby Ring", img: "media/rings/ring10.jpg", id: "ruby-ring" },
    ]
};

// Listen for category button clicks
document.querySelectorAll(".category-button").forEach(btn => {
    btn.addEventListener("click", function () {
        const category = this.dataset.category;
        openCategoryModal(category);
    });
});

// Function to open the modal
function openCategoryModal(category) {
    const modal = document.getElementById("category-modal");
    const title = document.getElementById("modal-title");
    const grid = document.getElementById("modal-products");

    if (!products[category]) return;

    // Capitalize category title
    title.innerText = category.charAt(0).toUpperCase() + category.slice(1);

    // Clear previous content
    grid.innerHTML = "";

    // Populate modal with products
    products[category].forEach(prod => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${prod.img}" alt="${prod.name}">
            <p>${prod.name}</p>
        `;
        // On click → go to product page with ID
        div.addEventListener("click", () => {
            window.location.href = `product.html?id=${prod.id}`;
        });
        grid.appendChild(div);
    });

    // Show the modal with animation
    modal.style.display = "block";
    setTimeout(() => {
        modal.classList.add("show");
    }, 10);
}

// Close modal with animation
document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("category-modal");
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 400); // Match CSS transition time
});



gsap.to("#mainimage",{
    scale:1.2,
    scrollTrigger:{
        trigger: "#mainimage",
        scroller: "body",
        start:"top 30%",
        end:"top -30%",
        scrub: 1
    }
})



gsap.from("#m",{
    scale:0,
    scrollTrigger:{
        trigger: "#m",
        scroller: "body",
        start:"top 110%",
        end:"top 60%",
        scrub: 1
    }
})

gsap.to("#ring_ceremony",{
    marginTop: "0vh",
    scrollTrigger:{
        trigger: "#ring_ceremony",
        scroller: " body",
        markers: false,
        start:"top 100%",
        end:"top 66%",
        scrub: 1,
        pin : "#page3"   
    }
    })

    gsap.to("#haldi_ceremony",{
    marginTop: "0vh",
    scrollTrigger:{
        trigger: "#ring_ceremony",
        scroller: " body",
        markers: false,
        start:"top 66%",
        end:"top 33%",
        scrub: 1,
        pin : "#page3"   
    }
    })

    gsap.to("#wedding_ceremony",{
    marginTop: "0vh",
    scrollTrigger:{
        trigger: "#ring_ceremony",
        scroller: " body",
        markers: false,
        start:"top 33%",
        end:"top 0%",
        scrub: 1,
        pin : "#page3"   
    }
    })

    
