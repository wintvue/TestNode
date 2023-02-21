
let alert = require('alert'); 
const path = require('path');

async function httpValidateKTP(req, res) {
    const ktp = req.body.ktp;
    if (ktp.length !== 0) {
        const ids = ktp.split(",");
        const duplicates = await temukanPelanggar(ids);
        res.render('./public/index.ejs', {
            data: duplicates
        })
    }
}

async function temukanPelanggar(ids) {
    let duplicates = [];
    let unique = {}
    ids.forEach(id => {
        if (unique.hasOwnProperty(id)) {
            duplicates.push(id);
        } else {
            unique[id] = 1;
        }
    });
    return duplicates;
}

module.exports = {
     httpValidateKTP
}