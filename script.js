'use strict';
var parseCsv = function(text) {
  var lines = text.split('\n');
  var result = [];
  for (var i = 0; i < lines.length; ++i) {
    result[result.length] = lines[i].split(',');
  }
  return result;
};
var csvArray = parseCsv(PAIRS);
var image0 = document.getElementsByTagName('img')[0];
var image1 = document.getElementsByTagName('img')[1];
var yesNo = document.getElementsByTagName('script')[0];
var fileName0;
var fileName1;
var getImages = function() {
  var PATH = 'lfw/';
  var node = yesNo.previousSibling;
  if (node.nodeType === 3) {
    document.body.removeChild(node);
  }
  var index = Math.floor(Math.random() * csvArray.length);
  fileName0 = csvArray[index][0];
  fileName1 = csvArray[index][1];
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
  document.body.insertBefore(document.createTextNode(text), yesNo);
};
document.getElementsByTagName('button')[0].onclick = function() {
  if (yesNo.previousSibling.nodeType === 3) {
    getImages();
  } else {
    checkImages();
  }
};
getImages();
