CREATE TABLE SALES_ORDER_DETAILS(
        ORDERNO varchar(6),
        PRODUCTNO varchar(6),
        QTYORDERED numeric(8),
        QTYDISP numeric(8),
        PRODUCTRATE numeric(10,2),
        CONSTRAINT fk_category foreign key(PRODUCTNO) references PRODUCT_MASTER(productno),
        CONSTRAINT fk1_category foreign key(ORDERNO) references SALES_ORDER(ORDERNO)
);

INSERT INTO SALES_ORDER_DETAILS VALUES("019001","P00001",4,4,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("019001","P07965",2,1,8400);
INSERT INTO SALES_ORDER_DETAILS VALUES("019001","P07885",2,1,5250);
INSERT INTO SALES_ORDER_DETAILS VALUES("019002","P00001",10,0,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("046865","p07868",3,3,3150);
INSERT INTO SALES_ORDER_DETAILS VALUES("046865","P07885",3,1,5250);
INSERT INTO SALES_ORDER_DETAILS VALUES("046865","P00001",10,10,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("046865","P03453",4,4,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("019003","P03453",2,2,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("019003","P06734",1,1,12000);
INSERT INTO SALES_ORDER_DETAILS VALUES("046866","P07965",1,0,8400);
INSERT INTO SALES_ORDER_DETAILS VALUES("046866","P07975",1,0,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("019008","P00001",10,5,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("019008","P07975",5,3,1050);

select * from SALES_ORDER_DETAILS;



-- +---------+-----------+------------+---------+-------------+
-- | ORDERNO | PRODUCTNO | QTYORDERED | QTYDISP | PRODUCTRATE |
-- +---------+-----------+------------+---------+-------------+
-- | 019001  | P00001    |          4 |       4 |      525.00 |
-- | 019001  | P07965    |          2 |       1 |     8400.00 |
-- | 019001  | P07885    |          2 |       1 |     5250.00 |
-- | 019002  | P00001    |         10 |       0 |      525.00 |
-- | 046865  | p07868    |          3 |       3 |     3150.00 |
-- | 046865  | P07885    |          3 |       1 |     5250.00 |
-- | 046865  | P00001    |         10 |      10 |      525.00 |
-- | 019003  | P03453    |          2 |       2 |     1050.00 |
-- | 019003  | P06734    |          1 |       1 |    12000.00 |
-- | 046866  | P07965    |          1 |       0 |     8400.00 |
-- | 046866  | P07975    |          1 |       0 |     1050.00 |
-- | 019008  | P00001    |         10 |       5 |      525.00 |
-- | 019008  | P07975    |          5 |       3 |     1050.00 |
-- | 046865  | P03453    |          4 |       4 |     1050.00 |
-- +---------+-----------+------------+---------+-------------+