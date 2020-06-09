const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');
var mdAutenticacion = require("../middlewares/autenticacion");

router.get('/', mdAutenticacion.verifyToken, employee.getEmployees);
router.post("/", mdAutenticacion.verifyToken, employee.createEmployee);
router.get("/:id", mdAutenticacion.verifyToken, employee.getEmployee);
router.get('/fecha/:fecha', mdAutenticacion.verifyToken, employee.getEmployeeByDate);
// router.put('/:id', employee.editEmployee);
// router.delete('/:id', employee.deleteEmployee);

module.exports = router;