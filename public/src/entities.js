;(function(THRUSTER) {
    THRUSTER.Entities = {
        player: {
            color: "blue",
            x: THRUSTER.Helpers.getRandomInt(0, THRUSTER.Config.CANVAS_WIDTH),
            y: 0,
            width: 32,
            height: 32,
            draw: function() {
                THRUSTER.ctx.fillStyle = this.color;
                THRUSTER.ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }
})(THRUSTER);
