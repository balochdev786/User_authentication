
// New



const express = require('express');
const app = express();
const PORT = 5000;
const routes = require('./routes/routes.js');
const db = require('./database/db.js');
const body_parser = require('body-parser');
db();


app.use(body_parser.json());


app.use('/', routes);




app.listen(PORT, function () {
    console.log(`App is running on ${PORT}....`);
})




































