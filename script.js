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
