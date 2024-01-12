const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes');

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("Api is running...");
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.get('/api/notes/:id', (req, res) => {
    res.json(notes.find((n) => n._id === req.params.id))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
