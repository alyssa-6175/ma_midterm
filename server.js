const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public')); // this serves html automatically

let dataStore = [
    { task: "Admin", points: "1 Point", progress: "0/1", status: "available", link: "admin.html" },
    { task: "cookie clicker", points: "8 points", progress: "0/100", status: "available", link: "cookie_clicker.html" },
    { task: "final task", points: "8 points", progress: "0/8", status: "available", link: "final.html" }
];



// get: send data to table
app.get('/api/messages', (req, res) => { res.json(dataStore) });

// post: receive data from the form
app.post('/api/messages', (req, res) => { dataStore.push(req.body); res.status(201).send({ task: "received!" }); });

app.listen(PORT, () => console.log(`server: http://localhost:${PORT}`));


// delete
// delete: remove a message by its index
app.delete('/api/messages/:id', (req, res) => {
    const index = req.params.id;
    dataStore.splice(index, 1);
    res.send({ message: "deleted!" });
});

// reminder: node server.js in terminal to start it running