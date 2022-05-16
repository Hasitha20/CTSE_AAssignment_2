const router = require('express').Router()
const employeeCtrl = require('../controllers/employeeCtrl')

router.route('/employee')
    .get(employeeCtrl.getEmployee)
    .post(employeeCtrl.createEmployee)


router.route('/employee/:id')
    .delete(employeeCtrl.deleteEmployee)
    .put(employeeCtrl.updateEmployee)



module.exports = router