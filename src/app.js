require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

var corsOptions = {
    origin: process.env.CORS_URL || 'http://localhost:8000/',
  };

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'views','public')));

const ktpRouter = require('./routes/ktp/ktpRouter.js');

app.use('/ktp', ktpRouter);

app.get('/', (req, res) => {
  res.redirect(req.baseUrl + "/ktp");
});


app.listen();

module.exports = app;
