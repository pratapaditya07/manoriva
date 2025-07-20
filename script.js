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

    
