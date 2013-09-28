;(function(THRUSTER) {
    THRUSTER.Entities = {
        player: {
            color: "blue",
            x: THRUSTER.Helpers.getRandomInt(0, THRUSTER.Config.CANVAS_WIDTH),
            y: 0,
            init: function() {
                this.plane = new Image();
                this.plane.src = '/public/images/LeftWingGold.png';
            },
            draw: function() {
                if (this.plane.complete) {
                    THRUSTER.ctx.drawImage(this.plane, this.x, this.y)
                }
            }
        }
    };
    THRUSTER.Entities.player.init();
})(THRUSTER);
