const express = require("express");
const router = express.Router();
const Individual = require('../models/Individuals.js')

router.get("/", (req, res) => {
    // console.log(Individual.estimatedDocumentCount())
    Individual.find().then(clients => {
        res.json(clients)
    })
})
router.get("/name/:name", (req, res) => {

    Individual.find({ name: { "$regex": req.params.name, "$options": "i" } }).then(showName => res.json(showName))
   
})
router.get("/symptoms/:symptoms", (req, res) => {

    Individual.find({ symptoms: { "$regex": req.params.symptoms, "$options": "i" } }).then(showName => res.json(showName))
   
})
router.get("/role/:school_role", (req, res) => {

    Individual.find({ school_role: { "$regex": req.params.school_role, "$options": "i" } }).then(showName => res.json(showName))
   
})
router.get("/covid/:covid", (req, res) => {

    Individual.find({ covid: { "$regex": req.params.covid, "$options": "i" } }).then(showName => res.json(showName))
   
})
router.get("/school/:school", (req, res) => {

    Individual.find({ school: { "$regex": req.params.school, "$options": "i" } }).then(showName => res.json(showName))
   
})

router.post("/new", (req, res) => {
    Individual.create(req.body).then(results=>res.json(results))
})

// router.put("/update/:id", (req, res) => {
//     Individual.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//         .then(update => res.json(update))
// })

// router.delete("/delete/:id", (req, res) => {
//     Individual.findOneAndDelete({ ownerId: req.params.id }).then(deleted => res.json(deleted))
// })

module.exports = router