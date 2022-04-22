const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`app's running on port ${PORT}`)
});