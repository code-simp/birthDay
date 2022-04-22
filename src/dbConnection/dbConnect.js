// Using Node.js `require()` to require mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }, () => {
    console.log("mongoose connected");
});

const bdBoi = mongoose.Schema({
    name: String,
    birthDate: Date,
    phoneNumber: Number
});

module.exports = mongoose.model('bdBois', bdBoi);

