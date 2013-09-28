;(function (THRUSTER) {
    THRUSTER.canvas = document.getElementById('game');
    THRUSTER.canvas.width = 480;
    THRUSTER.canvas.height = 320;
    THRUSTER.ctx = THRUSTER.canvas.getContext('2d');
    THRUSTER.Config = {
        CANVAS_WIDTH: 480,
        CANVAS_HEIGHT: 320
    };
})(THRUSTER);
