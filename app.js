const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("hello");
});

const notifyRouter = require('./src/notify/notify.js')
app.use('/bDay', notifyRouter);

app.listen(PORT, () => {
    console.log(`app's running on port ${PORT}`)
});