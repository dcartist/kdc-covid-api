const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
const opts = {
    // Make Mongoose use Unix time (seconds since Jan 1, 1970)
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
  };
  
var Individual = new Schema({
  name: { type: String },
  email: { type: String },
  guardian_name: { type: String },
  phone: { type: String },
  school: { type: String },
  school_role: { type: String },
  symptoms: { type: String },
  covid: { type: String },
  
} ,
opts);


let individual = mongoose.model('Individual', Individual)
module.exports = individual


