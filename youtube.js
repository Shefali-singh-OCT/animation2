var t1 = gsap.timeline()

t1.from("#page1 #nav",{
    opacity: 0,
    duration: 0.5,
    delay: 0.3
})
t1.from("#nav1 h2 , #nav2 h3, #nav3 h3",{
    y: -80,
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
    stagger: 0.3
})
t1.from("#page1 #left h1",{
    x: -50,
    opacity: 0,
    stagger: 0.3
})
t1.from("#page1 #left #navleft",{
    opacity: 0,
    duration: 0.3,
    x: -50
})
t1.from("#page1 #left #navleft h3",{
    opacity: 0,
    x: -50,
    stagger: 0.1
})
t1.from("#page1 #right",{
    opacity: 0,
    duration: 0.5,
    delay: 0.3,
    scale: 0.5
})
t1.from("#page1 #right #navright h3,#page1 #right #navright #div",{
    opacity: 0,
    x: -40,
    duration: 0.2,
    stagger: 0.3
})
t1.from("#page1 #right #search ",{
    opacity: 0,
    duration: 0.3
})
t1.from("#page1 #right #search h2,#page1 #right #search i",{
    opacity: 0,
    duration: 0.2,
    x: -30,
    stagger: 0.3
})
t1.from("#page2 #left",{
    opacity: 0,
    scrollTrigger:{
        scroller:"body",
        x: 30,
        trigger: "#page2 #right",
        start: "top 50%",
        end: "top 40%",
        scrub: 3
    }
})
t1.from("#page2 #right #box1,#page2 #right #box2,#page2 #right #box3",{
    opacity : 0,
    scale:0.2,
    stagger: 0.2,
    scrollTrigger:{
        duration: 0.4,
        delay:0.2,
        scroller:"body",
        trigger:"#page2",
        start:"top 50%",
        end: "top 90%",
        scrub: 3
    }
})
// t1.from("#page3 #box",{
//     opacity: 0,
//     scale: 2,
//     scrollTrigger:{
//         scroller:"body",
//         trigger: "#page3",
//         duration: 0.2,
//          markers: true,
//         start: "top 70%",
//         end: "top 40%",
//         scrub: 3
//     }
// })