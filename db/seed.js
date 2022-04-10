
const Individual = require('../models/Individuals')
const data = require('../data/abcschool.json')

Individual.deleteMany({}).then(
    Individual.insertMany(data).then(results=> console.log(results))
)