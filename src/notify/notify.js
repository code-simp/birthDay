const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// the module that takes care of scheduling
const schedule = require('node-schedule');

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

// method of the scheduling module everyday
const job = schedule.scheduleJob('30 0 * * *', () => {
    client.messages
        .create({ body: 'Good Morning Tarun', from: '+12406982773', to: '+919535616743' })
        .then(message => console.log(message.sid));
    console.log('Message Sent');
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
