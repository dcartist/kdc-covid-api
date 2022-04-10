const express = require("express");
const router = express.Router();
const Individual = require('../models/Individuals.js')

router.get("/", (req, res) => {
    console.log(Individual.estimatedDocumentCount())
    Individual.find().then(clients => {
        // console.log()
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


// router.get("/results", (req, res) => {
//     // console.log(Individual.estimatedDocumentCount())
//     Result.find().then(clients => {
//         // console.log()
//         res.json(clients)
//     })
// })

// router.get("/name/last/:lastName", (req, res) => {

//     Individual.find({ ownLastName: { "$regex": req.params.lastName, "$options": "i" } }).then(showName => res.json(showName))
//     // Individual.find({ ownLastName: req.params.lastName }).then(showName => res.json(showName))
// })
// router.get("/name/first/:firstName", (req, res) => {

//     Individual.find({ ownFirstName: { "$regex": req.params.firstName, "$options": "i" } }).then(showName => res.json(showName))
// })
// router.get("/jobs/:id", async (req, res) =>{ 
//     let firstresults = await Individual.find({ ownerId:req.params.id})
//     var results = []
//     for (let i = 0; i<firstresults[0].clientJobs.length; i++){
//         console.log(firstresults[0].clientJobs[i])
//         let jobDetails = await Job.findOne({jobId: firstresults[0].clientJobs[i]});
//         results.push(jobDetails)
//     }
//     res.json(results)
// })


// router.get("/id/full/:id", async(req, res) => {
//     let firstresults = await Individual.find({ ownerId:req.params.id})
//     var results = []
//     for (let i = 0; i<firstresults[0].clientJobs.length; i++){
//         let jobDetails = await Job.findOne({jobId: firstresults[0].clientJobs[i]});
//         results.push(jobDetails)
//     }
//     let finalResults = {}
//     finalResults.details = results
//     let final = {
//         ...firstresults[0]["_doc"],
//         ...finalResults
//     }
//     res.json(final)
// })
// router.get("/id/partial/:id", (req, res) => {
//     Individual.findOne({ ownerId: req.params.id }).then(showName => res.json(showName))
// })

// router.post("/new", (req, res) => {
//     let conditions = { },
//     update = { $inc: { clientCount: 1 }};
//     let details = req.body
//     Result.find({}).select('clientCount').then(results=>{
//         details.ownerId = parseInt(results[0].clientCount+1)
//         Result.updateOne({clientCount: results[0].clientCount}, update).then(
//             items => {
//                 Individual.create(details).then(clients => res.json(clients)).catch(err=>console.log(err))
//             }).catch(err=>console.log(err))
//         // res.json(details.ownerId)
//     }).catch(err=>console.log(err))
// // # update documents matching condition
//     // Result.updateOne(clientCount, update).then(
//     //     items => {
//     //         Individual.create(details).then(clients => res.json(clients))
//     //     })
    

// })

// router.put("/update/:ownerId", (req, res) => {
//     Individual.findOneAndUpdate({ ownerId: req.params.ownerId }, req.body, { new: true })
//         .then(update => res.json(update))
// })

// router.delete("/delete/:id", (req, res) => {
//     Individual.findOneAndDelete({ ownerId: req.params.ownerId }).then(deleted => res.json(deleted))
// })

module.exports = router