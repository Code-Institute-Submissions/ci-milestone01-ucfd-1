new TypeIt("#typewriter", {
    strings: ["Hello. I'm Jakub.", "A <strong>full stack</strong> developer."],
    loop: true,
    cursorChar: "|",
    lifeLike: true,
})
    .break()
    .pause(1500)
    .type("Let's make something awesome!")
    .pause(10000)
    .go();