show dbs
db.version()
db.help()
db.showdbs
use admin()
db.createCollection("stud")
db.collection.insertOne()
db.collection.insertMany()
db.collection.insert()
db.collection.find().skip(3)
db.collection.find({}).sort({ "field": 1 })
db.collection.find({}).sort({ "field": -1 })
db.collection.find().count()
db.collection.find({ "Key": "Value" })
$or, $nor, $and, $not
db.collection.find({ "field": { $in: [value] } })
$or, $nor, $and, $not
db.collection.find({ $and: [{ expression1 }, { expression2 }, , , , , , , ,] })
db.collection_name.update({ Selection_data }, { $set: { updated_data } })
db.collection.find({ "field": { $type: [basontype1, basontype2, basontype3] } })

Bason Type                  Number              alias
======================================================

Double                      1
String                      2
Object                      3
Array                       4
BinaryData                  5
ObjectID                    7
Bollean                     8
Date                        9
null                        10
32 Bit Integer              16
64 Bit Interger             18
Decimal128                  19

db.collection.find({"field":{$all:[value]}})
db.collection.find({"field":{$elemMatch:{$gte,$lte}}})
db.collection.find({"field":{$size:value}})

"double"
"string"
"object"
"array"
"binData"
"objectId"
"bool"
"date"
"null"
"int"
"long"
"decimal"