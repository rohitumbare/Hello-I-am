
var timeline = gsap.timeline();

timeline.from(".nav h3", {
    y: -50,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
    stagger: 0.4,
});

timeline.from(".main img", {
    x: 100,
    rotate: 45,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
    stagger: 0.4,
});

timeline.from(".main h1", {
    x: -500,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
    stagger: 0.4,
});

timeline.from(".main footer h3", {
    x: -500,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
    stagger: 0.4,
});

timeline.from(".main footer p", {
    x: -500,
    opacity: 0,
    duration: 0.4,
    delay: 0.1,
    stagger: 0.4,
});
