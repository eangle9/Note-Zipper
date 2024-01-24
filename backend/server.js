const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const notes = require('./data/notes');
const ConnectDb = require('./config/db');
const userRoute = require('./routes/userRoute');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const app = express();
dotenv.config();
ConnectDb();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Api is running...");
})

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

app.use('/api/users', userRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));
