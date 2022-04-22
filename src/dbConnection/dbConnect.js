require('dotenv').config()

// Using Node.js `require()` to require mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }, () => {
    console.log("mongoose connected");
});

const bdBoi = mongoose.Schema({
    name: String,
    birthDate: String,
    phoneNumber: String,
    group: String
});

module.exports = mongoose.model('bdBois', bdBoi);

// const bdModel = mongoose.model('bdBois', bdBoi)

// const newuser = new bdModel({
//     name: "Saqiib M",
//     birthDate: "06/05/2022",
//     phoneNumber: "+919071156280",
//     group: "pullingo"
// });

// newuser.save((err) => {
//     if (err) {
//         console.log(err);
//     }
// });