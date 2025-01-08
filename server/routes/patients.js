const express = require('express')
const router = express.Router()

const {
    getAllPatients,
    addPatient,
    getPatient,
    updatePatient,
    deletePatient
} = require('../controllers/patients')

router.route('/').get(getAllPatients).post(addPatient)
router.route('/:id').get(getPatient).patch(updatePatient).delete(deletePatient)

module.exports = router
