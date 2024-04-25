const express = require("express");
const router = express.Router();
const Individual = require('../models/Individuals.js')
// const Result = require("../models/Results")

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

let choiceAcademy = function(name){
    Result.findAndUpdate({ updateSchool }, 
        { $inc: { schoolname: 1 } }, {new: true }).then(response => {
        res.json(response)
    })
//     // let schoolname = name.replace(" ", "_")
//     // let schoolreplaces = schools.schoolname
//     Result.findOneAndUpdate({ school : res._id }, { $inc: { views: 1 } }, {new: true },function(err, response) {
//         if (err) {
//         callback(err);
//        } else {
//         callback(response);
//        }
//     })
}

router.get("/testing/:name", (req, res) =>{
    let schoolname = req.params.name.replace(" ", "_")
    let updateSchool = `schools.${schoolname}`
    // res.send(schoolname)
    Result.find({ schools }).then(response => {
        res.json(response)
    })

    // Result.findByIdAndUpdate(entityId, { $inc: { views: 1 } }, function(err, doc) {
    //     console.log(doc);
    // });
    // Result.findOneAndUpdate({ schools }, 
    //     { $inc: { [schoolname]: 1 } }, {new: true }).then(response => {
    //     res.json(response)
    // })

})

router.post("/new", (req, res) => {
    Individual.create(req.body).then(results=>res.json(results))
    // Models.post.Post.findOneAndUpdate({ _id: res._id }, { $inc: { views: 1 } }, {new: true },function(err, response) {
    //     if (err) {
    //     callback(err);
    //    } else {
    //     callback(response);
    //    }





})

// router.put("/update/:id", (req, res) => {
//     Individual.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//         .then(update => res.json(update))
// })

// router.delete("/delete/:id", (req, res) => {
//     Individual.findOneAndDelete({ ownerId: req.params.id }).then(deleted => res.json(deleted))
// })

module.exports = router