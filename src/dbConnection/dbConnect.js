require('dotenv').config()

// Using Node.js `require()` to require mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true }, () => {
    console.log("mongoose connected");
});

const bdBoi = mongoose.Schema({
    name: String,
    birthDate: String,
    phoneNumber: String
});

module.exports = mongoose.model('bdBois', bdBoi);

// const bdModel = mongoose.model('bdBois', bdBoi)

// const newuser = new bdModel({
//     name: "tarun",
//     birthDate: "22/04/2022",
//     phoneNumber: "+919535616743"
// });

// newuser.save((err) => {
//     if (err) {
//         console.log(err);
//     }
// });