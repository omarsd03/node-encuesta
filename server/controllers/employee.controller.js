const Employee = require('../models/employee');
const qrcode = require('qrcode');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res, next) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployee = async (req, res, next) => {

    const employee = new Employee({
        sgi: req.body.sgi,
        primerPregunta: req.body.primerPregunta,
        segundaPregunta: req.body.segundaPregunta,
        tercerPregunta: req.body.tercerPregunta,
        cuartaPregunta: req.body.cuartaPregunta,
        quintaPregunta: req.body.quintaPregunta
    });

    const encuesta = await employee.save();
    const jsonData = { id: encuesta._id };
    const request = JSON.stringify(jsonData);

    qrcode.toDataURL(request, function (err, url) {
      res.json(url);
    });

};

employeeCtrl.getEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
};

employeeCtrl.editEmployee = async (req, res, next) => {
    const { id } = req.params;
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated'});
};

employeeCtrl.deleteEmployee = async (req, res, next) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = employeeCtrl;