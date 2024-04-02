// TODOD: config() is a method provided by the dotenv module. When called, it reads the .env file in the root directory of the project and adds the key-value pairs to the process.env object, making them accessible throughout the application.
require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(express.static('public'));
// ! Templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
























