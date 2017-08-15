var execFile = require('child_process').execFile;
var mozjpeg = require('mozjpeg');
var fs = require('fs');

// GET
var inputDir = "./LARGE_IMAGES";
var outputDir = "./MINIFIED_IMAGES";
var jpegArray = [];

// ===== BUILD THE JPEG ARRAY ===== //
fs.readdir(inputDir, function(err, items) {
    if (err) {
      console.log(err);
    }
    for (var i=0; i<items.length; i++) {
      let item = items[i];
      let index = item.indexOf('.');
      let ext = item.slice(index);
      if (ext === '.jpg' || ext === '.jpeg') {
        jpegArray.push(item);
      }
    }
    // console.log(jpegArray.length);
    compressImagesInArray(jpegArray)
});

console.log('Directories: ', inputDir, outputDir);

// ===== COMPRESS THE IMAGES ===== //
function compressImagesInArray(arrayToCompress) {
  let pos = 0;
  function compressSingleImage(image) {
    if (pos < arrayToCompress.length) {
      let inputFile = inputDir + '/' + image;
      let outputFile = outputDir + '/' + image;
      // console.log('FILES', inputFile, outputFile);
      execFile(mozjpeg, ['-outfile', outputFile, inputFile], function (err) {
          if (err) {
            console.log(err);
          }
          console.log('Image minified:', outputFile);
          pos++;
          compressSingleImage(arrayToCompress[pos])
      });
    }
  }
  compressSingleImage(arrayToCompress[pos]);
}
