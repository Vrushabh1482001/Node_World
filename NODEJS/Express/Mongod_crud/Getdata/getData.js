const express = require('express');
const getData = express.Router();
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;


getData.get('/', (req, res) => {
    res.json({ msg: 'Authorized user inside module' });

    mongoClient.connect('mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/?retryWrites=true&w=majority', (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('node_5');

            db.collection('books').find().toArray((err, arr) => {
                console.log(arr);
            });
        }

    });
});

// const client = new MongoClient(url);

// getData.get('/', (req, res) => {
//     res.json({ msg: 'Authorized user inside module' });

//     mongoClient.connect('mongodb://localhost:27017', (err, connection) => {
//         if (err) throw err;
//         else {
//             const db = connection.db('node_5');
//             // console.log(db.collection('restaurants').findOne();
//             db.collection('books').find().toArray((err, arr) => {
//                 console.log(arr);
//             });
//         }

//     });
// });
module.exports = getData;