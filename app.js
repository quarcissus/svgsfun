const moonPath = "M251 5.99999C96 -22 1.99999 82.0002 0.999994 195C-6.13928e-06 308 85 404 251 384C262.964 382.559 136 331.235 136 195C136 58.9999 266.745 8.84428 251 5.99999Z"

const timeline = anime.timeline({
    duration: 1400,
    easing: "easeInQuad"
});

timeline.add({
        targets: "#circle",
        d: [{
            value: moonPath
        }],
        duration: 1200,


    })
    .add({
        targets: 'svg',
        rotate: 720,
        duration: 1400,
    }, '-= 650').add