// To move from initial position to final position we use .to

// timeline.to("#box1", {
//     x: 400,
//     y:300,
//     duration: 2,
//     delay: 2
// })

// timeline.to("#box2", {
//     x: 700,
//     y: 400,
//     duration: 2,
//     delay: 2
// })

// While to move from final position to initial position we use .from

// timeline.from("#box2", {
//     x: 400,
//     y:300,
//     duration: 2, 
//     delay: 2
// })

// we can even add all of the css properties in it

// timeline.to("#box1", {
//     x: 400,
//     y: 300,
//     duration: 2,
//     delay: 2,
//     rotate: 180,
//     backgroundColor: "gray"
// })

// timeline.to("#box2", {
//     x: 500,
//     y: -300,
//     duration: 2,
//     delay: 2,
//     rotate: 180,
//     backgroundColor: "red",
//     borderRadius: "20%",
//     scale: 0.5
// })


// Text Animations

// timeline.from("h1", {
//     color: "red",
//     opacity: 0,
//     y: 50,
//     duration: 2, 
//     delay: 1,
//     stagger: 0.3,
// // Here, 0.3 seconds gap is added between each animation or Delay of 0.3s between each item
// })


// timeline.to("#box2", {
//     x: 500,
//     y: -300,
//     duration: 2,
//     delay: 2,
//     rotate: 180,
//     backgroundColor: "red",
//     borderRadius: "20%",
//     scale: 0.5,
//     repeat: -1,
//     // This will repeat the animation for infinite time
//     yoyo: true
//     // This wil make the box from come to initial point after going to final point 
// })
    

// Timeline 

// Without Timeline

// timeline.to("#box1", {
//     x: 1000,
//     rotate: 180,
//     duration: 2,
//     delay: 1
// })

// timeline.to("#box2", {
//     x: 1000,
//     rotate: 180,
//     duration: 2,
//     delay: 3
// })

// timeline.to("#box3", {
//     x: 1000,
//     rotate: 180,
//     duration: 2,
//     delay: 5
// })

// With Timeline

// var timeline = gsap.timeline();

// timeline.to("#box1", {
//      x: 1000,
//     rotate: 180,
//     duration: 2,
// })

// timeline.to("#box2", {
//     x: 1000,
//     rotate: 180,
//     duration: 2,
//     delay: 1
// })

// timeline.to("#box3", {
//     x: 1000,
//     rotate: 180,
//     duration: 2,
// })

// var timeline = gsap.timeline();

// timeline.from("h2", {
//    y: -20,
//    opacity: 0,
//    duration: 1,
//    delay: 0.5
// })

// timeline.from("h4", {
//    y: -20,
//    opacity: 0,
//    duration: 1,
//    stagger: 0.3
// })

// timeline.from("h1", {
//    y: 20,
//    opacity: 0,
//    duration: 0.5,
//    scale: 0.2
// })


// gsap.from("#page1 #box", {
//     scale: 0,
//     rotate: 360,
//     duration: 2,
//     delay: 1,
// })

// ScrollTrigger

// one way to write 

// gsap.from("#page2 #box", {
//     scale: 0,
//     rotate: 360,
//     duration: 2,
//     scrollTrigger: "#page2 #box"
// })

// Another way to write scrollTrigger(more detailed way)

// gsap.from("#page2 #box", {
//     scale: 0,
//     rotate: 360,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page2 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 70%"
//     }
// })

// gsap.from("#page3 #box", {
//     scale: 0,
//     rotate: 360,
//     duration: 2,
//     scrollTrigger: {
//         trigger: "#page3 #box",
//         scroller: "body",
//         markers: true,
//         start: "top 70%" 
//     }
// })

// Example

// gsap.from("#page2 h1", {
//     opacity: 0,
//     duration: 2,
//     x: 100,
//     scrollTrigger: {
//         trigger: "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%"
//     }
// })

// gsap.from("#page2 h2", {
//     opacity: 0,
//     duration: 2,
//     x: -100,
//     scrollTrigger: {
//         trigger: "#page2 h2",
//         scroller: "body",
//         // markers: true,
//         start: "top 50%",
//     }
// })


gsap.from("#page2 #box", {
    scale: 0,
    opacity: 0,
    rotate: 360,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
        pin: true
    } 
})

