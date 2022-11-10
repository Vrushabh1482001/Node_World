-- CREATE TABLE SALES_ORDER_DETAILS(
--         ORDERNO varchar(6),
--         PRODUCTNO varchar(6) ,
--         QTYORDERED numeric(8),
--         QTYDISP numeric(8),
--         PRODUCTRATE numeric(10,2),
--         CONSTRAINT fk_sales_order_details foreign key(ORDERNO) references SALES_ORDER(ORDERNO),
--         CONSTRAINT fk1_sales_order_details foreign key(PRODUCTNO) references PRODUCT_MASTER(productno)
--         );

INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P00001",1,4,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07965",2,1,8400);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07885",3,1,5250);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P00001",4,0,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","p07868",5,3,3150);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07885",6,1,5250);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P00001",7,10,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P03453",8,4,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P03453",9,2,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P06734",10,1,12000);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07965",11,0,8400);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07975",12,0,1050);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P00001",13,5,525);
INSERT INTO SALES_ORDER_DETAILS VALUES("O00001","P07975",14,3,1050);

select * from SALES_ORDER_DETAILS;

+---------+-----------+------------+---------+-------------+
| ORDERNO | PRODUCTNO | QTYORDERED | QTYDISP | PRODUCTRATE |
+---------+-----------+------------+---------+-------------+
| O00001  | P00001    |          1 |       4 |      525.00 |
| O00001  | P07965    |          2 |       1 |     8400.00 |
| O00001  | P07885    |          3 |       1 |     5250.00 |
| O00001  | P00001    |          4 |       0 |      525.00 |
| O00001  | p07868    |          5 |       3 |     3150.00 |
| O00001  | P07885    |          6 |       1 |     5250.00 |
| O00001  | P00001    |          7 |      10 |      525.00 |
| O00001  | P03453    |          8 |       4 |     1050.00 |
| O00001  | P03453    |          9 |       2 |     1050.00 |
| O00001  | P06734    |         10 |       1 |    12000.00 |
| O00001  | P07965    |         11 |       0 |     8400.00 |
| O00001  | P07975    |         12 |       0 |     1050.00 |
| O00001  | P00001    |         13 |       5 |      525.00 |
| O00001  | P07975    |         14 |       3 |     1050.00 |
+---------+-----------+------------+---------+-------------+