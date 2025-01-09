gsap.to("#mainimage",{
    scale:1.2,
    scrollTrigger:{
        trigger: "#mainimage",
        scroller: "body",
        start:"top 35%",
        end:"top -30%",
        scrub: 1

    }
})