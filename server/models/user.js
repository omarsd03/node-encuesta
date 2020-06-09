const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    sgi: { type: String, required: true},
    name: { type: String, required: true},
    password: { type: String, required: true},
    role: { type: String, default: 'Requester' }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);