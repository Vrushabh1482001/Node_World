create table PRODUCT_MASTER(
    productno varchar(50),
    description  varchar(50),
    profitpercent numeric(38,2),
    unitmeasured varchar(50),
    qtyonhand numeric(38),
    recorderlvl numeric(38),
    sellprice numeric(38),
    costprice numeric(38),
    CONSTRAINT pk_Category PRIMARY KEY(productno)
);
insert into PRODUCT_MASTER values('p00001','1.44floppies',5,'piece',100,20,525,500);
insert into PRODUCT_MASTER values('p03453','monitors',6,'piece',10,3,12000,11200);
insert into PRODUCT_MASTER values('p06734','mouse',5,'piece',100,20,525,500);
insert into PRODUCT_MASTER values('p07865','1.22 floppies',5,'piece',100,20,525,500);
insert into PRODUCT_MASTER values('p07868','keyboards',2,'piece',10,3,3150,3050);
insert into PRODUCT_MASTER values('p07885','CD Drive',2.50,'piece',10,3,5250,5100);
insert into PRODUCT_MASTER values('p07965','540 HDD',4,'piece',10,3,8400,8000);
insert into PRODUCT_MASTER values('p07975','1.44 Drive',5,'piece',10,3,1050,1000);
insert into PRODUCT_MASTER values('p08865','1.22 Drive',5,'piece',2,3,1050,1000);

select * from PRODUCT_MASTER;

-- +-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
-- | productno | description   | profitpercent | unitmeasured | qtyonhand | recorderlvl | sellprice | costprice | new_price |
-- +-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+
-- | p00001    | 1.44floppies  |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
-- | p03453    | monitors      |          6.00 | piece        |        10 |           3 |     12000 |     11200 |     13800 |
-- | p06734    | mouse         |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
-- | p07865    | 1.22 floppies |          5.00 | piece        |       100 |          20 |       525 |       500 |       604 |
-- | p07868    | keyboards     |          2.00 | piece        |        10 |           3 |      3150 |      3050 |      3623 |
-- | p07885    | CD Drive      |          2.50 | piece        |        10 |           3 |      5250 |      5100 |      6038 |
-- | p07965    | 540 HDD       |          4.00 | piece        |        10 |           3 |      8400 |      8000 |      9660 |
-- | p07975    | 1.44 Drive    |          5.00 | piece        |        10 |           3 |      1050 |      1000 |      1208 |
-- | p08865    | 1.22 Drive    |          5.00 | piece        |         2 |           3 |      1050 |      1000 |      1208 |
-- +-----------+---------------+---------------+--------------+-----------+-------------+-----------+-----------+-----------+

