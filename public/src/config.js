;(function (THRUSTER) {
    THRUSTER.canvas = document.getElementById('game');
    THRUSTER.canvas.width = 384;
    THRUSTER.canvas.height = 512;
    THRUSTER.ctx = THRUSTER.canvas.getContext('2d');
    THRUSTER.Config = {
        CANVAS_WIDTH: THRUSTER.canvas.width,
        CANVAS_HEIGHT: THRUSTER.canvas.height
    };
})(THRUSTER);
