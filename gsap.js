const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

tl.to(".float_imgs", { duration: 2, y: 10 });
tl.to(".float_imgs", { duration: 2, y: 0 });



gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".from_r").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 100,
        duration: 1,
    });
});

gsap.utils.toArray(".from_l").forEach((el) => {
    gsap.from(el, {
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -100,
        duration: 1,
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

const tl2 = gsap.timeline({repeat: 0, repeatDelay: 0})

document.querySelectorAll('.animation_v').forEach(ani => {
    tl2.from(ani, {
        opacity: 0,
        duration: 1
    });
});