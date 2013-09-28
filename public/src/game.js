;(function(THRUSTER) {
    // Game Loop
    var FPS = 30;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    var textX = 50;
    var textY = 0;

    function update() {
        THRUSTER.Entities.player.y += 1;
    };

    function draw() {
        THRUSTER.ctx.clearRect(0, 0, THRUSTER.Config.CANVAS_WIDTH, THRUSTER.Config.CANVAS_HEIGHT);
        THRUSTER.Entities.player.draw();
    };

})(THRUSTER);
