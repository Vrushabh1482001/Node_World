db.createCollection("PRODUCT_MASTER")
db.PRODUCT_MASTER.insertMany([
    { productno: 'P00001', description: '1.44floppies', profitpercent: 5, unitmeasured: 'piece', qtyonhand: 100, recorderlvl: 20, sellprice: 525, costprice: 500 },
    { productno: 'P03453', description: 'Monitors', profitpercent: 6, unitmeasured: 'piece', qtyonhand: 10, recorderlvl: 3, sellprice: 12000, costprice: 11200 },
    { productno: 'P06734', description: 'Mouse', profitpercent: 5, unitmeasured: 'piece', qtyonhand: 20, recorderlvl: 5, sellprice: 1050, costprice: 500 },
    { productno: 'P07865', description: '1.22 floppies', profitpercent: 5, unitmeasured: 'piece', qtyonhand: 100, recorderlvl: 20, sellprice: 525, costprice: 500 },
    { productno: 'P07868', description: 'Keyboards', profitpercent: 2, unitmeasured: 'piece', qtyonhand: 10, recorderlvl: 3, sellprice: 3150, costprice: 3050 },
    { productno: 'P07885', description: 'CD Drive', profitpercent: 2.50, unitmeasured: 'piece', qtyonhand: 10, recorderlvl: 3, sellprice: 5250, costprice: 5100 },
    { productno: 'P07965', description: '540 HDD', profitpercent: 4, unitmeasured: 'piece', qtyonhand: 10, recorderlvl: 3, sellprice: 8400, costprice: 8000 },
    { productno: 'P07975', description: '1.44 Drive', profitpercent: 5, unitmeasured: 'piece', qtyonhand: 10, recorderlvl: 3, sellprice: 1050, costprice: 1000 },
    { productno: 'P08865', description: '1.22 Drive', profitpercent: 5, unitmeasured: 'piece', qtyonhand: 2, recorderlvl: 3, sellprice: 1050, costprice: 1000 },

])

db.PRODUCT_MASTER.find().pretty();


/* [
    {
      _id: ObjectId("639c6aafe6de05ba1746115c"),
      productno: 'P00001',
      description: '1.44floppies',
      profitpercent: 5,
      unitmeasured: 'piece',
      qtyonhand: 100,
      recorderlvl: 20,
      sellprice: 525,
      costprice: 500
    },
    {
      _id: ObjectId("639c6aafe6de05ba1746115d"),
      productno: 'P03453',
      description: 'Monitors',
      profitpercent: 6,
      unitmeasured: 'piece',
      qtyonhand: 10,
      recorderlvl: 3,
      sellprice: 12000,
      costprice: 11200
    },
    {
      _id: ObjectId("639c6aafe6de05ba1746115e"),
      productno: 'P06734',
      description: 'Mouse',
      profitpercent: 5,
      unitmeasured: 'piece',
      qtyonhand: 20,
      recorderlvl: 5,
      sellprice: 1050,
      costprice: 500
    },
    {
      _id: ObjectId("639c6aafe6de05ba1746115f"),
      productno: 'P07865',
      description: '1.22 floppies',
      profitpercent: 5,
      unitmeasured: 'piece',
      qtyonhand: 100,
      recorderlvl: 20,
      sellprice: 525,
      costprice: 500
    },
    {
      _id: ObjectId("639c6aafe6de05ba17461160"),
      productno: 'P07868',
      description: 'Keyboards',
      profitpercent: 2,
      unitmeasured: 'piece',
      qtyonhand: 10,
      recorderlvl: 3,
      sellprice: 3150,
      costprice: 3050
    },
    {
      _id: ObjectId("639c6aafe6de05ba17461161"),
      productno: 'P07885',
      description: 'CD Drive',
      profitpercent: 2.5,
      unitmeasured: 'piece',
      qtyonhand: 10,
      recorderlvl: 3,
      sellprice: 5250,
      costprice: 5100
    },
    {
      _id: ObjectId("639c6aafe6de05ba17461162"),
      productno: 'P07965',
      description: '540 HDD',
      profitpercent: 4,
      unitmeasured: 'piece',
      qtyonhand: 10,
      recorderlvl: 3,
      sellprice: 8400,
      costprice: 8000
    },
    {
      _id: ObjectId("639c6aafe6de05ba17461163"),
      productno: 'P07975',
      description: '1.44 Drive',
      profitpercent: 5,
      unitmeasured: 'piece',
      qtyonhand: 10,
      recorderlvl: 3,
      sellprice: 1050,
      costprice: 1000
    },
    {
      _id: ObjectId("639c6aafe6de05ba17461164"),
      productno: 'P08865',
      description: '1.22 Drive',
      profitpercent: 5,
      unitmeasured: 'piece',
      qtyonhand: 2,
      recorderlvl: 3,
      sellprice: 1050,
      costprice: 1000
    }
  ] */