const express = require('express'); 

const ktpController = require('./ktpController.js');

const { httpValidateKTP } = ktpController;

const ktpRouter = express.Router();

const path = require('path');

ktpRouter.use(express.static(path.join(__dirname, '..', '..', '..', 'views','public')));

ktpRouter.get('/', (req, res) => {
    res.render('./public/index.ejs', {data : []});
});

ktpRouter.post('/submitForm', httpValidateKTP);

module.exports = ktpRouter;