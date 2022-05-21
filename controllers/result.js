const express = require("express");
const router = express.Router();
const Result = require("../models/Results")

router.get("/", (req, res) => {
    // console.log(Individual.estimatedDocumentCount())
    Result.find().then(clients => {
        res.json(clients)
    })
})


module.exports = router