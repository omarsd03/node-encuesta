const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-encuesta';

mongoose.connect(URI)
    .then(db => console.log('Conexion a BD Establecida'))
    .catch(err => console.error(err));

module.exports = mongoose;