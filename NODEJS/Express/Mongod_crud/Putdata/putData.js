const express = require('express');
const putData = express.Router();
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;



putData.put('/', (req, res) => {
    // res.json({ msg: 'Authorized user inside module' });

    mongoClient.connect('mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/?retryWrites=true&w=majority', (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('node_5');

            db.collection('books').updateOne(
                { isbn: req.body.isbn },
                {
                    $set: { "title": req.body.title }
                    // "isbn": req.body.isbn,
                    // "downloadable": req.body.downloadable,
                    // "no_of_reviews": req.body.no_of_reviews,
                    // "tags": req.body.tags,
                    // "languages": ['english', 'hindi', 'tamil'],
                    // 'author': { "name": req.body.name, "callname": req.body.callname, "profile": [Object] }
                    //{title : "",isbn:"",downloadable:"",no_of_reviews:"",name:"",callname:""}

                }, (err, result) => {
                    if (err) throw err;
                    else {

                        res.json({ "insert": "Update Success.....!" });
                        putData.use('/', require('../Getdata/getData'));
                    }
                });
        }
    });
});

// const client = new MongoClient(url);

// putData.put('/', (req, res) => {
//     res.json({ msg: 'Authorized user inside module' });

//     mongoClient.connect('mongodb://localhost:27017', (err, connection) => {
//         if (err) throw err;
//         else {
//             const db = connection.db('node_5');

//             db.collection('books').find().toArray((err, arr) => {
//                 console.log(arr);
//             });
//         }

//     });
// });
module.exports = putData;