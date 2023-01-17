const express = require('express');
const getData = express.Router();




// getData.get('/', (req, res) => {
//     res.json({ msg: 'Authorized user inside module' });

// });

getData.get("/", (req, res) => {
    res.send(req.body);
});

module.exports = getData;