const express = require('express');
const schedule = require('node-schedule');
const axios = require('axios');
const appWaker = express.Router();


var options = {
    method: 'GET',
    url : `http://localhost:5050/`
}

schedule.scheduleJob({minute: 14, tz: 'IST'}, async () => {
    try{
        await axios.request(options).then(async (response) => {
            const responseData = response.data;
            console.log(responseData);
        });
    }catch(err){
        console.log({message: err});
    }   
});

module.exports = appWaker;