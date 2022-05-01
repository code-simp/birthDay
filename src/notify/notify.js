const express = require("express");
const bodyParser = require("body-parser");
const app = express();                          
const schedule = require('node-schedule');
const bdBoi = require('../Models/bdBoi');               // Schema import
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


var today = new Date().toLocaleDateString();


// method of the scheduling module everyday
const job = schedule.scheduleJob({hour: 0, minute: 5, tz: "IST"}, async () => {
    bdBoi.find().exec((err, docs) => {
        if (err) {
            res.send(err);
            return
        }
        else {
            console.log(docs);
            // getting today's date

            var today = new Date().toISOString();

            // looping through and finding if someone has a birthday today

            for (i of docs) {
                if (i.birthDate.slice(5, 10) == today.slice(5, 10)) {
                    console.log("BirthDayyyy")
                    var groupName = i.group
    
                    bdBoi.find({ "group": groupName }).exec(async (err, peeps) => {
                        for (people of peeps) {
                            console.log(people.phoneNumber);
                            // comment the next line to not waste credits
                            await sendMsg(people.name, i.name, people.phoneNumber);
                        }
                    });
                }
            }
            
        }
    });
});


// function that sends the messages to people
const sendMsg = async (user, bBoi, toPhone) => {
    await client.messages
        .create({ body: `Hey ${user}.\nToday's ${bBoi}'s birthdayyy, Happy Birthday ya filthy F$#tard`, from: '+12406982773', to: toPhone })
        .then(message => {
            console.log(message.status);
            console.log(message.error_code);
            console.log(message.error_message);
        });
    console.log("message sent")
};
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
