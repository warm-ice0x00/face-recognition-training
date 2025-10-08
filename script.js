'use strict';
var callback = function(csv) {
  var pairs = (function() {
    var lines = csv.split('\n');
    var result = [];
    for (var i = 0; i < lines.length; ++i) {
      result[i] = lines[i].split(',');
    }
    return result;
  })();
  var image0 = document.getElementsByTagName('img')[0];
  var image1 = document.getElementsByTagName('img')[1];
  var yesNo = document.getElementsByTagName('td')[0].lastChild;
  var id;
  var getImages = function() {
    var path = 'lfw/';
    id = Math.floor(Math.random() * pairs.length);
    var pair = pairs[id];
    if (Math.random() < 0.5) {
      pair = [pair[1], pair[0]];
    }
    image0.src = path + pair[0];
    image1.src = path + pair[1];
    yesNo.nodeValue = '\xA0';
  };
  getImages();
  var toFullName = function(fileName) {
    return fileName.slice(0, -9);
  };
  var checkImages = function() {
    var pair = pairs[id];
    var text = toFullName(pair[0]) === toFullName(pair[1]) ? 'Yes' : 'No';
    yesNo.nodeValue = text;
  };
  var button = document.getElementsByTagName('button')[0];
  button.onclick = function() {
    if (yesNo.nodeValue === '\xA0') {
      checkImages();
      return;
    }
    getImages();
  };
};
