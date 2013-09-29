;(function(THRUSTER) {
    THRUSTER.Entities = {
        fallingPiece: {
            color: "blue",
            y: 0,
            x: 0,
            init: function() {
                this.plane = new Image();
                this.plane.src = '/public/images/LeftWingGold.png';
                this.x = THRUSTER.Helpers.getRandomInt(0, THRUSTER.Config.CANVAS_WIDTH - this.plane.width);
                console.log('offset: ', THRUSTER.Config.CANVAS_WIDTH - this.plane.width)
            },
            draw: function() {
                if (this.plane.complete) {
                    THRUSTER.ctx.drawImage(this.plane, this.x, this.y);
                }
            }
        }
    };
    THRUSTER.Entities.fallingPiece.init();
})(THRUSTER);
