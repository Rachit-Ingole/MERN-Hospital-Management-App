const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [50, 'name can not be more than 50 characters'],
  },
  age:{
    type:Number,
    required: [true,'must provide age'],
    max:[120,'please enter valid age'],
    min:[0,'please enter valid age'],
  },
  gender:{
    type:String,
    enum:['Prefer not to say','Male','Female','Transgender'],
    default:'Prefer not to say'
  },
  disease:{
    type:String,
    required: [true,'must provide disease/illness'],
  },
  room:{
    type:Number,
    unique:true,
  }

})

module.exports = mongoose.model('Patient', PatientSchema)
