const express = require("express");
const app = express();
const port = 9000;
const mongoose = require("mongoose"); 
var bodyParser = require('body-parser');
var route = require("./routes/form.js");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use("/", route);

mongoose.connect('mongodb://127.0.0.1/dashboard', { useUnifiedTopology: true, useNewUrlParser: true}, function(error, db){
    if(error){
        console.log(error);
    }else{
        app.listen( port, function(){
            console.log(`Example app listening at http://localhost:${port}`);
        });    
    }
});
module.exports = app;
