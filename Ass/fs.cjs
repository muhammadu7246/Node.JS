const fs = require('fs');

//Create
fs.writeFile('info.txt', 'Hello \n myself  Muhammad Usama,\n I learning a node.JS', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});


fs.readFile('info.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error to file  read:', err);
    } else {
        console.log('File contents:', data);
    }
});

