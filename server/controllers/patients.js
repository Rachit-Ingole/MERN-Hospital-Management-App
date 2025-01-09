const Patient = require('../models/Patient')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAllPatients = asyncWrapper(async (req, res) => {
  const patients = await Patient.find({}).select('name gender _id age')
  res.status(200).json({ patients })
})

const addPatient = asyncWrapper(async (req, res) => {
    
    let {room:roomNo,gender:sex} = req.body.newFormData
    if(sex == "male"){
        sex = "Male"
    }else if(sex == "female"){
        sex = "Female"
    }else if(sex=="transgender"){
        sex = "Transgender"
    }else if(sex == "prefer not to say"){
        sex = "Prefer not to say"
    }

    if(!roomNo || roomNo <= 0){
        const patient = await Patient.findOne().sort({room:-1})
        roomNo = patient.room + 1
    }

    const patient = await Patient.create({...req.body.newFormData,room:roomNo,gender:sex})
    res.status(201).json({ patient })
})

const getPatient = asyncWrapper(async (req, res, next) => {
  const { id: patientID } = req.params
  const patient = await Patient.findOne({ _id: patientID })
  if (!patient) {
    return next(createCustomError(`No patient with id : ${patientID}`, 404))
  }

  res.status(200).json({ patient })
})

const deletePatient = asyncWrapper(async (req, res, next) => {
  const { id: patientID } = req.params
  const patient = await Patient.findOneAndDelete({ _id: patientID })
  if (!patient) {
    return next(createCustomError(`No patient with id : ${patientID}`, 404))
  }
  res.status(200).json({ patient })

})

const updatePatient = asyncWrapper(async (req, res, next) => {
  const { id: patientID } = req.params
  let {gender:sex} = req.body.newFormData
  if(sex == "male"){
      sex = "Male"
  }else if(sex == "female"){
      sex = "Female"
  }else if(sex=="transgender"){
      sex = "Transgender"
  }else if(sex == "prefer not to say"){
      sex = "Prefer not to say"
  }
  req.body.newFormData.gender = sex
  const patient = await Patient.findOneAndUpdate({ _id: patientID }, req.body.newFormData, {
    new: true,
    runValidators: true,
  })

  if (!patient) {
    return next(createCustomError(`No task with id : ${patientID}`, 404))
  }

  res.status(200).json({ patient })
})

module.exports = {
  getAllPatients,
  addPatient,
  getPatient,
  updatePatient,
  deletePatient,
}
