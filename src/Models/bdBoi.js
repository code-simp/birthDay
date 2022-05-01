const mongoose = require('mongoose');



const bdBoi = mongoose.Schema({
    name: String,
    birthDate: String,
    phoneNumber: String,
    group: String
});

module.exports = mongoose.model('bdBois', bdBoi);
