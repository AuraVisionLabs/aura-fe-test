const express = require('express');
const cors = require("cors");
const apiResponse = require('./flight-data.json')

const app = express();

const controller = (req, res) => {
    res.json(apiResponse)
}

app.use(cors());
app.get('/', controller)

app.listen(3002);