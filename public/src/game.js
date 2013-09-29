;(function(THRUSTER) {
    // Game Loop
    var FPS = 30;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    function update() {
        THRUSTER.Entities.fallingPiece.y += 1;
    };

    function draw() {
        THRUSTER.ctx.clearRect(0, 0, THRUSTER.Config.CANVAS_WIDTH, THRUSTER.Config.CANVAS_HEIGHT);
        THRUSTER.Entities.fallingPiece.draw();
    };

})(THRUSTER);
