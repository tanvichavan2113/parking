const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');
// const User = require('./models/UserSchema')
app.use(express.json());

app.use(require('./routes/auth'));

const PORT = process.env.PORT || 3002;



//middle ware for login
const middleware = (req, res, next) => {
    console.log(`hello from middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from server router app`);
})

app.listen(PORT, () => {
    console.log(`server is running on port no ${PORT}`)
})