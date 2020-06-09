(function (exports) {
    'use strict';

    function getMedia() {
      var args = Array.from(arguments).filter(function (n) {
        return typeof n === "number";
      });
      if (!args.length) return "0.00";
      var media = args.reduce(function (current, sum) {
        return current + sum;
      }) / args.length;
      return media.toFixed(2);
    }

    function getRandonNumber(min, max) {
      var r = Math.random() * (max - min + 1) + min;
      return parseInt(r);
    }

    console.log(getMedia(1, 2, 3, 4));

    exports.getMedia = getMedia;
    exports.getRandomNumber = getRandonNumber;

    return exports;

}({}));
