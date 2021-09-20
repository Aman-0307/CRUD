const mongoose = require('mongoose');
var schema = mongoose.Schema;

var formData = new schema({
    Name: String,
    Contact: Number,
    EmailID: String,
});

module.exports = mongoose.model("personInfo", formData, "personInfo");
