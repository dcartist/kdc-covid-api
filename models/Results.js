const mongoose = require('../db/connection')

var Schema = mongoose.Schema;


const opts = {
    timestamps: { createdAt: 'created_at',
    updatedAt: 'updated_at' },
  };
  
var Result = new Schema({
  schools:{ 
    Aim_Academy: {type: Number}, 
    Beyond_Academy: {type: Number}, 
    Curiosity_Academy: {type: Number}, 
    Discover_Academy: {type: Number},
    Explore_Academy: {type: Number},
  },
  active_cases: { type: Number },
  has_covid: { type: Number },
  with_symptoms: { type: Number },
  without_symptoms: { type: Number },
  cases: {type: Number},
  staff: {type: Number},
  students: {type: Number},

} ,
opts);

let result = mongoose.model('Result', Result)
module.exports = result