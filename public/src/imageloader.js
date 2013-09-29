;(function(THRUSTER) {
    THRUSTER.imageFolder = '/public/images/';
    THRUSTER.imageFiles = ['LeftWingGold.png'];
    THRUSTER.imageObjects = {};
    THRUSTER.loadImage = function(src, name) {
        var deferred = $.Deferred();
        var img = new Image();
        img.onload = function() {
            deferred.resolve();
        };
        img.src = src;
        THRUSTER.imageObjects[name] = img;
        return deferred.promise();
    };
    var loaders = [];
    for (var i = 0; i < THRUSTER.imageFiles.length; i++) {
        loaders.push(THRUSTER.loadImage(THRUSTER.imageFolder + THRUSTER.imageFiles[i], THRUSTER.imageFiles[i]));
    };
    $.when.apply($, loaders).done(function() {
       THRUSTER.Game.init();
       THRUSTER.Game.gameLoop();
    });
})(THRUSTER);
