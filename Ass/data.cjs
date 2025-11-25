const fs = require('fs');
const path = require('path');

const folderPath = './data';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Text files in the "data" folder:');
  files.forEach(file => {
    if (path.extname(file) === '.txt') {
      console.log(file);
    }
  });
});


// Result: 

// Text files in the "data" folder:
// data.txt
// us.txt