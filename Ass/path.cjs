const path = require('path');

console.log('Directory name: ', __dirname);

console.log('File name: ', __filename);



console.log('File Path: ',path.isAbsolute('C:/Users/Teachers/Desktop/Node.JS/info.html'));



// Working with file extensions
const filePath = 'C:/Users/Teachers/Desktop/Node.JS/info.html';
  const fileInfo = {
    name: path.basename(filePath, path.extname(filePath)),
    ext: path.extname(filePath),
    dir: path.dirname(filePath)
};
console.log('File info: ', fileInfo);


// Result

// Directory name:  C:\Users\Teachers\Desktop\Node.JS
// File name:  C:\Users\Teachers\Desktop\Node.JS\path.cjs
// File Path:  true
// File info:  {
//   name: 'info',
//   ext: '.html',
//   dir: 'C:/Users/Teachers/Desktop/Node.JS'
// }
