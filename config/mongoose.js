// imported the library
const mongoose = require('mongoose');

// connected with the database
mongoose.connect('mongodb://127.0.0.1:27017/toDo_list_db');

// check if connection is succeful or not
const db = mongoose.connection;

// if connection fails
db.on('error', console.error.bind(console, "Database Connection Error"));

// if connection is successful
db.once('open', function(){
    console.log("Connection to the database is successful");
})