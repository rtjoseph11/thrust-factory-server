;(function(THRUSTER) {
    // Game Loop
    THRUSTER.Game = {
        FPS: 30,
        init: function() {
            THRUSTER.Entities.fallingPiece.init();
        },
        gameLoop: function() {
            return setInterval(function() {
                THRUSTER.Game.update();
                THRUSTER.Game.draw();
            }, 1000 / THRUSTER.Game.FPS)
        },
        update: function() {
            THRUSTER.Entities.fallingPiece.y += 1;
        },
        draw: function() {
            THRUSTER.ctx.clearRect(0, 0, THRUSTER.Config.CANVAS_WIDTH, THRUSTER.Config.CANVAS_HEIGHT);
            THRUSTER.Entities.fallingPiece.draw();
        }
    }
})(THRUSTER);
