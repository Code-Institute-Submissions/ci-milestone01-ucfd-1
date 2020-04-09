// new TypeIt("#typewriter", {
//     strings: ["Hey there!", "My name is Jakub and I'm a <strong>Full Stack Developer</strong>.", "Let's make something awesome!"],
//     speed: 95,
//     loop: false,
//     cursorChar: "_"


// }).go();


new TypeIt("#typewriter", {
    
    loop: true,
    cursorChar: "|",
    lifeLike: true, 
})
    .type("Hello!")
    .pause(500)
    .delete(11)
    .pause(1000)
    .type("My name is Jakub and I'm a <strong>Full Stack Developer</strong>.")
    .break()
    .break()
    .pause(1100)
    .type("Let's make something awesome!")
    .pause(4000)
    .go();
