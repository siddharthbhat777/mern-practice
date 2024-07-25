const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const postRoutes = require('./routes/post');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/post', postRoutes);

mongoose.connect('mongodb+srv://mern-user:6xGW51fcEX40BxKo@cluster0.jyxrlcl.mongodb.net/mern').then(() => {
    console.log('Database Connected!');
    app.listen(8001);
}).catch((err) => {
    console.log(err);
});