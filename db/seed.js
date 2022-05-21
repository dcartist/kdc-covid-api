
const Individual = require('../models/Individuals')
const Result = require('../models/Results')
const dataJson = require('../data/my.json')

let newData = dataJson.map((item, index)=>{
    item.userNo = index
    return item
})

// Aim Academy
// Beyond Academy
// Curiousity Academy
// Discover Academy
// Explore Academy

let aim = dataJson.filter(a => a.school == 'Aim Academy')
let beyond = dataJson.filter(a => a.school == 'Beyond Academy')
let curiousity = dataJson.filter(a => a.school == 'Curiousity Academy')
let discover = dataJson.filter(a => a.school == 'Discover Academy')
let explore = dataJson.filter(a => a.school == 'Explore Academy')
let students = dataJson.filter(a => a.school_role == 'student')
let staff = dataJson.filter(a => a.school_role !== 'student')
let with_symptoms = dataJson.filter(a => a.symptoms == "true")
let without_symptoms = dataJson.filter(a => a.symptoms == "false")
let no_covid = dataJson.filter(a => a.covid == "false")
let covid = dataJson.filter(a => a.covid !== "false")

let finalResults = [{
    schools:{ 
        Aim_Academy: aim.length,
        Beyond_Academy: beyond.length,
        Curiosity_Academy: curiousity.length,
        Discover_Academy: discover.length,
        Explore_Academy: explore.length
    },

    students: students.length,
    staff: staff.length,
    with_symptoms: with_symptoms.length,
    without_symptoms: without_symptoms.length,
    active_cases: dataJson.length
}]

// const { faker } = require('@faker-js/faker');
// const randomName = faker.name.findName();
// console.log(randomName)
// const schools = [ "Aim Academy", "Beyond Academy", "Curiosity Academy", "Discover Academy", "Explore Academy"]
// const trueorfalse = ["true", "false"]
// const role = ["staff", "student"]
// let data = []
// for (let i = 0; i <= 45; i++){
//     let dataObject = {
//         phone: faker.phone.phoneNumber(),
//         email: faker.internet.email(),
//         school: schools[Math.floor(Math.random() *5)],
//         school_role: role[Math.floor(Math.random() *2)],
//         symptoms: trueorfalse[Math.floor(Math.random() *2)],
//         covid: trueorfalse[Math.floor(Math.random() *2)],
//     }
//     if (dataObject.school_role  == "student"){
//         let lastname = faker.fake('{{name.lastName}}')
//         dataObject.guardian_name = faker.fake('{{name.firstName}} ') + lastname
//         dataObject.name = faker.fake('{{name.firstName}} ') + lastname

//     } else {
//         dataObject.guardian_name = ""
//         dataObject.name = faker.fake('{{name.firstName}} {{name.lastName}}')
//     }
//     data.push(dataObject)
// }
// require('fs').writeFile(

//     './my.json',

//     JSON.stringify(data),

//     function (err) {
//         if (err) {
//             console.error('Crap happens');
//         }
//     }
// );
// "name": "Krispin Medcalfe",
// "phone": "(560) 3076154",
// "school": "Aim Academy",
// "school_role": "student",
// "symptoms": "false",
// "covid": "true",

Individual.deleteMany({}).then(
    Individual.insertMany(newData).then(results=> console.log(results))
).catch(err=>console.log(err))

Result.deleteMany({}).then(
    Result.insertMany(finalResults).then(results=> console.log(results))
).catch(err=>console.log(err))

console.log(finalResults)
// process.exit()