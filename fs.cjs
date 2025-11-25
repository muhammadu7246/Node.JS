const fs = require('fs');

//Create
fs.writeFile('file.txt', 'Hello, this is a new file!', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});


fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error to file  read:', err);
    } else {
        console.log('File contents:', data);
    }
});


fs.appendFile('file.txt', '\n\t\aThis is an appended line!', (err) => {
    if (err) {
        console.error('Error  to add the text:', err);
    } else {
        console.log('Text Add successfully!');
    }
});

//Create
fs.writeFile('us.txt', 'Hellloo, \nThis is a deleteted file', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});

fs.unlink('us.txt', (err)=>{
    if (err) {
        console.error('Error  to delete the file:', err);
    }else{
        console.error('Deleted:', err);
    }
})
