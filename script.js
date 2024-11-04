'use strict';
var csvArray = (function(csv) {
  var lines = csv.split('\n');
  var result = [];
  for (var i = 0; i < lines.length; ++i) {
    result[result.length] = lines[i].split(',');
  }
  return result;
})(PAIRS);
var image0 = document.getElementsByTagName('img')[0];
var image1 = document.getElementsByTagName('img')[1];
var yesNo = (function() {
  var lineBreaks = document.getElementsByTagName('br');
  return lineBreaks[lineBreaks.length - 1].nextSibling;
})();
var fileName0;
var fileName1;
var getImages = function() {
  var PATH = 'lfw/';
  yesNo.nodeValue = '\xA0';
  var index = Math.floor(Math.random() * csvArray.length);
  var pair = csvArray[index];
  fileName0 = pair[0];
  fileName1 = pair[1];
  if (Math.random() < 0.5) {
    fileName1 = [fileName0, (fileName0 = fileName1)][0];
  }
  image0.src = PATH + fileName0;
  image1.src = PATH + fileName1;
};
var getFullName = function(fileName) {
  return fileName.slice(0, fileName.lastIndexOf('_'));
};
var checkImages = function() {
  var text = getFullName(fileName0) === getFullName(fileName1) ? 'Yes' : 'No';
  yesNo.nodeValue = text;
};
document.getElementsByTagName('button')[0].onclick = function() {
  if (yesNo.nodeValue !== '\xA0') {
    getImages();
  } else {
    checkImages();
  }
};
getImages();
