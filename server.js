// Here is where we import modules
// We begin by loading Express

const dotenv = require("dotenv"); // require package
dotenv.config(); // Loads the environment variables from .env file

const express = require('express');
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})

//Import Fruit Model
const Fruit = require('./models/fruit.js');



app.get('/', async (req, res) => {      //get route to slash
    // res.send('hello,friend') add these lines throughough out the process to check the get route
    res.render('index.ejs');
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});