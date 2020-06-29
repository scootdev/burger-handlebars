const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});