const mongoose = require('../db/connection')

var Schema = mongoose.Schema;
const opts = {
    timestamps: { createdAt: 'created_at',
    updatedAt: 'updated_at' },
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


