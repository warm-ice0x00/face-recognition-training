var image0 = document.getElementById('image-0');
var image1 = document.getElementById('image-1');
var yesNo = document.getElementById('yes-no').previousSibling;
var fileName0;
var fileName1;
var getImages = function() {
  yesNo.nodeValue = '';
  var index = Math.floor(Math.random() * IMAGES.length);
  fileName0 = IMAGES[index][0];
  fileName1 = IMAGES[index][1];
  if (Math.random() < 0.5) {
    fileName1 = [fileName0, (fileName0 = fileName1)][0];
  }
  image0.src = PATH + fileName0;
  image1.src = PATH + fileName1;
};
var getPersonalName = function(fileName) {
  return fileName.slice(0, fileName.lastIndexOf('_'));
};
var checkImages = function() {
  yesNo.nodeValue =
    getPersonalName(fileName0) === getPersonalName(fileName1) ? 'Yes' : 'No';
};
getImages();
document.getElementById('check-next').onclick = function() {
  yesNo.nodeValue ? getImages() : checkImages();
};
