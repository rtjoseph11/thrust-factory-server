;(function() {
    // Set canvas dimensions
    var CANVAS_WIDTH = 480,
        CANVAS_HEIGHT = 320;

    // Create reference to canvas element via DOM
    var canvas = document.getElementById('game');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT

    // Get reference to canvas context
    var ctx = canvas.getContext('2d');

    // Game Loop
    var FPS = 30;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    var textX = 50;
    var textY = 50;

    function update() {
        textX += 1;
        textY += 1;
    };

    function draw() {
        ctx.fillStyle = 'red';
        ctx.fillText('Sup Bro!', textX, textY);
    };

})();
