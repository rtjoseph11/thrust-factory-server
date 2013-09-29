;(function(THRUSTER) {
    THRUSTER.imageFolder = '/public/images/';
    THRUSTER.imageFiles = ['LeftWingGold.png'];
    THRUSTER.imageObjects = {};
    var img;
    for (var i = 0; i < THRUSTER.imageFiles.length; i++) {
        img = new Image();
        img.name = THRUSTER.imageFiles[i];
        img.onload = function() {
        };
        img.src = THRUSTER.imageFolder + img.name;
        THRUSTER.imageObjects[img.name] = img;
    }
})(THRUSTER);
