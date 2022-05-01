const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5050;
const connectDB = require('../birthDay/src/dbConnection/dbConnect');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}


var today = new Date();
console.log(today.toISOString());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectDB();

app.get('/', (req, res) => {
    res.send("hello");
});

const notifyRouter = require('./src/notify/notify.js');
app.use('/bDay', notifyRouter);

app.listen(PORT, () => {
    console.log(`app's running on port ${PORT}`)
});