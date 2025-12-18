// // Result:

// // http://localhost:3000/api/users/    (for seeing)
// // http://localhost:3000/api/users/   (for filtering)
// // http://localhost:3000/api/users/    (for Post in json)








const express = require('express');
const app = express();
const fs = require('fs');
let users = require('./data.json');

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // IMPORTANT for JSON body

// GET all users
app.get('/user', (req, res) => {
    res.json(users);
});

// GET user by id
app.get('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
});

// POST (Create new user)
app.post('/user', (req, res) => {
    const body = req.body;
    const newUser = { ...body, id: users.length + 1 };
    users.push(newUser);

    fs.writeFile('./data.json', JSON.stringify(users, null, 2), () => {
        res.status(201).json(newUser);
    });
});

app.put('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users[index] = { ...users[index], ...req.body };

    fs.writeFile('./data.json', JSON.stringify(users, null, 2), () => {
        res.json({ status: 'updated', user: users[index] });
    });
});

// DELETE (Remove user)
app.delete('/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(index, 1);

    fs.writeFile('./data.json', JSON.stringify(users, null, 2), () => {
        res.json({ status: 'deleted' });
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
