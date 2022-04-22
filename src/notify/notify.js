const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring the mongodb model 
const bdBoi = require('../dbConnection/dbConnect.js')

// lets send some messages
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// method to test messaging
// WORKS = YES
app.get('/me', (req, res) => {
    client.messages
        .create({ body: 'Hello World', from: '+12406982773', to: '+919535616743' })
        .then(message => console.log(message.sid));
    res.send('success');
});

// to get all birthdays
app.get('/getAll', (req, res) => {
    bdBoi.find().exec((err, docs) => {
        if (err) {
            res.send(err);
            return
        }
        else {
            res.send(docs)
        }
    });
});

module.exports = app;
