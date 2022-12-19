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
