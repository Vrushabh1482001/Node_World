
db.createCollection("SALESMAN_MASTER")

db.SALESMAN_MASTER.insertMany([
    { salesman_no: "S00001", salesmanname: "Kiran", address: "A/14 worli", city: "Bombay", pincode: 400002, state: "Mah", salamt: 3000, tgttoget: 100, ytdsale: 50, remark: "Good" },
    { salesman_no: "S00002", salesmanname: "Manish", address: "65,nariman", city: "Bombay", pincode: 400001, state: "Mah", salamt: 3000, tgttoget: 200, ytdsale: 100, remark: "Good" },
    { salesman_no: "S00003", salesmanname: "Ravi", address: "p-7 Bandra", city: "Bombay", pincode: 400032, state: "Mah", salamt: 3000, tgttoget: 200, ytdsale: 100, remark: "Good" },
    { salesman_no: "S00004", salesmanname: "Ashish", address: "A/5 Juhu", city: "Bombay", pincode: 400044, state: "Mah", salamt: 3500, tgttoget: 200, ytdsale: 150, remark: "Good" }
])

db.SALESMAN_MASTER.find().pretty();

/* [
    {
      _id: ObjectId("639c69e1e6de05ba17461158"),
      salesman_no: 'S00001',
      salesmanname: 'Kiran',
      address: 'A/14 worli',
      city: 'Bombay',
      pincode: 400002,
      state: 'Mah',
      salamt: 3000,
      tgttoget: 100,
      ytdsale: 50,
      remark: 'Good'
    },
    {
      _id: ObjectId("639c69e1e6de05ba17461159"),
      salesman_no: 'S00002',
      salesmanname: 'Manish',
      address: '65,nariman',
      city: 'Bombay',
      pincode: 400001,
      state: 'Mah',
      salamt: 3000,
      tgttoget: 200,
      ytdsale: 100,
      remark: 'Good'
    },
    {
      _id: ObjectId("639c69e1e6de05ba1746115a"),
      salesman_no: 'S00003',
      salesmanname: 'Ravi',
      address: 'p-7 Bandra',
      city: 'Bombay',
      pincode: 400032,
      state: 'Mah',
      salamt: 3000,
      tgttoget: 200,
      ytdsale: 100,
      remark: 'Good'
    },
    {
      _id: ObjectId("639c69e1e6de05ba1746115b"),
      salesman_no: 'S00004',
      salesmanname: 'Ashish',
      address: 'A/5 Juhu',
      city: 'Bombay',
      pincode: 400044,
      state: 'Mah',
      salamt: 3500,
      tgttoget: 200,
      ytdsale: 150,
      remark: 'Good'
    }
  ]

 */