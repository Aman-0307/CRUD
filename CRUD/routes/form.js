const express = require("express");
var router = express.Router();
var controller = require("../controllers/formControllers.js");

router.get("/getData", function(req, res){
    controller.getData(req, res);
});

router.put("/addData", function(req, res){
    controller.addData(req, res);
});

router.post("/deleteData/:id", function(req, res){
    controller.deleteData(req, res);
});

router.post("/updateData/:id", function(req, res){
    controller.updateData(req, res);
});

module.exports = router;