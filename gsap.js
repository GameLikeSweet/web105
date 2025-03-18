const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

tl.to(".float_imgs", { duration: 2, y: 10 });
tl.to(".float_imgs", { duration: 2, y: 0 });



gsap.registerPlugin(ScrollTrigger);
console.log(document.querySelector(".ic_img")); 


gsap.utils.toArray(".from_r").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
        },
        opacity: 0,
        x: 100,
        duration: 2,
    });
});

gsap.utils.toArray(".from_l").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
        },
        opacity: 0,
        x: -100,
        duration: 2,
    });
});


gsap.to(".badges",{
    opacity: 0,
    duration: 0.5,
    scrollTrigger:{
        trigger: ".notice",
        start: "top 50%",
        toggleActions: "play none none reverse",
    }
});

