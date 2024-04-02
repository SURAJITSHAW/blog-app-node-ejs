// TODOD: config() is a method provided by the dotenv module. When called, it reads the .env file in the root directory of the project and adds the key-value pairs to the process.env object, making them accessible throughout the application.
require('dotenv').config();

const express = require('express');
const expressLayout = require("express-ejs-layouts");
const router = require("./server/routes/main.js");

const app = express();
const PORT = 5000 || process.env.PORT;

// ! Serve Static Files
app.use(express.static('public'));
// ! Configure Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
// ! Define routes
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
























