//Import the express and url modules
const express = require('express');
const bodyParser = require("body-parser");

//The express module is a function. When it is executed it returns an app object
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Set up the application to handle GET requests sent to the user path
require("./routes/roadBike.route.js")(app);

// set port, listen for requests
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

module.exports = app;