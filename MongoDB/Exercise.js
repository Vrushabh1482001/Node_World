db.CLIENT_MASTER.find({})
db.CLIENT_MASTER.find({}).pretty()
db.PRODUCT_MASTER.find({})
db.CLIENT_MASTER.find({ "city": "Bombay" })
db.SALESMAN_MASTER.find({ "salamt": { $eq: 3000 } })

db.CLIENT_MASTER.find({ $and: [{ "city": { $in: ["Bombay"] } }, { "state": { $in: ["Maharashtra"] } }] })
db.CLIENT_MASTER.find({ $or: [{ "city": { $in: ["Bombay"] } }, { "state": { $in: ["Maharashtra"] } }] })

db.CLIENT_MASTER.find({ $and: [{ "city": { $nin: ["Bombay"] } }, { "state": { $nin: ["Maharashtra"] } }] })
db.CLIENT_MASTER.find({ $or: [{ "city": { $nin: ["Bombay"] } }, { "state": { $nin: ["Maharashtra"] } }] })

db.CLIENT_MASTER.find({ $and: [{ "city": { $in: ["Bombay"] } }, { "state": { $nin: ["Maharashtra"] } }] })
db.CLIENT_MASTER.find({ $or: [{ "city": { $in: ["Bombay"] } }, { "state": { $nin: ["Maharashtra"] } }] })

db.CLIENT_MASTER.find({ $and: [{ "city": { $nin: ["Bombay"] } }, { "state": { $in: ["Maharashtra"] } }] })
db.CLIENT_MASTER.find({ $or: [{ "city": { $nin: ["Bombay"] } }, { "state": { $in: ["Maharashtra"] } }] })


db.CLIENT_MASTER.updateOne({ Clientno: "C00005" }, { $set: { city: "Bangalore" } })
db.CLIENT_MASTER.updateOne({ Clientno: "C00001" }, { $set: { baldue: "1000" } })
db.PRODUCT_MASTER.updateOne({ description: "Keyboards" }, { $set: { sellprice: "950" } })
db.SALESMAN_MASTER.updateMany({}, { $set: { "city": "Pune" } })

// Q1) Select all documents from books collection, where no_of_reviews  is 3.

db.books.find({ "no_of_reviews": { $eq: 3 } })

// Q2) Select all documents from the books collection where author profile contains 2 courses?

db.books.find({ "author.profile.courses": { $eq: 2 } })

// Q3) Read all documents from the books collection where 'tags' array contains 'database' element?

db.books.find({ "tags": { $eq: "database" } })
db.books.find({ "tags": { $in: ["database"] } })

// Q4) Select all documents from books collection where tags array is exactly equal to ["language","freeware","programming"].

db.books.find({ "tags": { $eq: ["language", "freeware", "programming"] } })

// Q5) To select all documents from books collection where no_of_reviews is not equal to 3.

db.books.find({ "no_of_reviews": { $ne: 3 } })

// Q6) Select all documents from books collection where the no_of_reviews is greater than 3.

db.books.find({ "no_of_reviews": { $gt: 3 } })

// Q7) Select all documents from books collection where the no_of_reviews is greater than or equal to 3.

db.books.find({ "no_of_reviews": { $gte: 3 } })


// Q8) Select all documents from books collection where the no_of_reviews is less than 3.

db.books.find({ "no_of_reviews": { $lt: 3 } })

// Q9) Select all documents from the books collection where the no_of_reviews is 1 or 4 or 5?

db.books.find({ $or: [{ "no_of_reviews": { $eq: 1 } }, { "no_of_reviews": { $eq: 4 } }, { "no_of_reviews": { $eq: 5 } }] })

// Q10) Select all documents where either no_of_reviews >3 or tags array contains programming element?

db.books.find({ $or: [{ "no_of_reviews": { $gt: 3 } }, { "tags": "programming" }] })


// Q11) Select all documents where either no_of_reviews is less than 3 or downloadable is true or author profile contains atleast 2 books?

db.books.find({ $or: [{ "no_of_reviews": { $lt: 3 } }, { "author.profile.books": { $gte: 2 } }, { "downloadable": true }] })
db.books.find({ $and: [{ "no_of_reviews": { $lt: 3 } }, { "author.profile.books": { $gte: 2 } }, { "downloadable": true }] })

// Q12) Select all documents does not conain no_of_reviews and downloadable fields Note: $or results + $nor results = total no of documents


db.books.find({ $or: [{ "no_of_reviews": { "$exists": false } }, { "downloadable": { "$exists": false } }] }).count()
db.books.find({ $or: [{ "no_of_reviews": { "$exists": true } }, { "downloadable": { "$exists": true } }] }).count()

// db.books.find({ $or: [{ "no_of_reviews": { $eq: null } }, { "downloadable": { $eq: null } }] }).count()
// db.books.find({ $and: [{ "no_of_reviews": { $eq: null } }, { "downloadable": { $eq: null } }] }).count()



// Q13) Select all documents where the no_of_reviews is greater than or equals to 3 and downloadable is true?

db.books.find({ $and: [{ "no_of_reviews": { $gte: 3 } }, { "downloadable": true }] })

// Q14) update no_of_reviews to 10 where isbn no is 6677
db.books.updateOne({ "isbn": 6677 }, { $set: { "no_of_reviews": 10 } })
db.books.find()


// Q15) update profile to 8 of books Oracle in simple way

db.books.updateOne({ "title": "Oracle in simple way" }, { $set: { "author.profile.books": 8 } })
db.books.find()


