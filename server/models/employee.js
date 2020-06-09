const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    sgi: { type: String, required: true },
    primerPregunta: { type: String, required: true },
    segundaPregunta: { type: String, required: true },
    tercerPregunta: { type: String, required: true },
    cuartaPregunta: { type: String, required: true },
    quintaPregunta: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);