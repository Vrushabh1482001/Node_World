
db.createCollection("client_master")

db.client_master.insertMany([
  { Clientno: "C00001", Name: "Ivan", address1: "A/14 worli", city: "Bombay", pincode: 400054, state: "Maharashtra", baldue: 15000 },
  { Clientno: "C00002", Name: "Vandana", address1: "B-23 vesu ", city: "Madras", pincode: 780001, state: "Tamilnadu", baldue: 0 },
  { Clientno: "C00003", Name: "Pramada", address1: "65,nariman", city: "Bombay", pincode: 400057, state: "Maharashtra", baldue: 5000 },
  { Clientno: "C00004", Name: "Basu", address1: "p-7 Bandra", city: "Bombay", pincode: 400056, state: "Maharashtra", baldue: 0 },
  { Clientno: "C00005", Name: "Ravi", address1: "C-42 agra", city: "Delhi", pincode: 100001, state: "Delhi", baldue: 2000 },
  { Clientno: "C00006", Name: "Rukmini", address1: "A/5 Juhu", city: "Bombay", pincode: 400050, state: "Maharashtra", baldue: 0 },
])

db.client_master.find().pretty();


/* [
    {
      _id: ObjectId("639c671ce6de05ba17461152"),
      Clientno: 'C00001',
      Name: 'Ivan',
      address1: 'A/14 worli',
      city: 'Bombay',
      pincode: 400054,
      state: 'Maharashtra',
      baldue: 15000
    },
    {
      _id: ObjectId("639c671ce6de05ba17461153"),
      Clientno: 'C00002',
      Name: 'Vandana',
      address1: 'B-23 vesu ',
      city: 'Madras',
      pincode: 780001,
      state: 'Tamilnadu',
      baldue: 0
    },
    {
      _id: ObjectId("639c671ce6de05ba17461154"),
      Clientno: 'C00003',
      Name: 'Pramada',
      address1: '65,nariman',
      city: 'Bombay',
      pincode: 400057,
      state: 'Maharashtra',
      baldue: 5000
    },
    {
      _id: ObjectId("639c671ce6de05ba17461155"),
      Clientno: 'C00004',
      Name: 'Basu',
      address1: 'p-7 Bandra',
      city: 'Bombay',
      pincode: 400056,
      state: 'Maharashtra',
      baldue: 0
    },
    {
      _id: ObjectId("639c671ce6de05ba17461156"),
      Clientno: 'C00005',
      Name: 'Ravi',
      address1: 'C-42 agra',
      city: 'Delhi',
      pincode: 100001,
      state: 'Delhi',
      baldue: 2000
    },
    {
      _id: ObjectId("639c671ce6de05ba17461157"),
      Clientno: 'C00006',
      Name: 'Rukmini',
      address1: 'A/5 Juhu',
      city: 'Bombay',
      pincode: 400050,
      state: 'Maharashtra',
      baldue: 0
    }
  ] */