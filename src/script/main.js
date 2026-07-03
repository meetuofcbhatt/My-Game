new p5((p) => {
    let font;
    p.preload = () => {
        font = p.loadFont("../assets/Pixellettersfull-BnJ5.ttf");
    };

    p.setup = () => {
        const canvasEl = p.createCanvas(512, 384, document.getElementById("game"));
        p.pixelDensity(3); //check if higher or lower pixelDensity shows better on the screen.
        canvasEl.canvas.style = "";

        p.textFont(font);
    };

    p.draw = () => {

    };

    p.keyPressed = (keyEvent) => {

    };

    p.keyReleased = () => {

    };
})