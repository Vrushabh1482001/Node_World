--*** Hand On Exercises Date : 09/11/2022 ***--

1. Exercises on using Having and group by calauses :

A . Print the description and total qty sold for each product.
 
    create or replace view HOE091122_1_A as
    select p.productno,p.Description, sum(s.QTYORDERED) from  SALES_ORDER_DETAILS s,product_master p
    where s.PRODUCTNO=p.productno
    group by p.productno;

    select * from HOE091122_1_A;

     +-----------+--------------+-------------------+
     | productno | Description  | sum(s.QTYORDERED) |
     +-----------+--------------+-------------------+
     | P00001    | 1.44floppies |                25 |
     | P07965    | 540 HDD      |                13 |
     | P07885    | CD Drive     |                 9 |
     | P07868    | Keyboards    |                 5 |
     | P03453    | Monitors     |                17 |
     | P06734    | Mouse        |                10 |
     | P07975    | 1.44 Drive   |                26 |
     +-----------+--------------+-------------------+

B . Find the value of each product sold.
 
    create or replace view HOE091122_1_B as
    select p.productno,p.Description, sum(s.QTYDISP) from  SALES_ORDER_DETAILS s,product_master p
    where s.PRODUCTNO=p.productno
    group by p.productno;

    select * from HOE091122_1_B;

    +-----------+--------------+----------------+
    | productno | Description  | sum(s.QTYDISP) |
    +-----------+--------------+----------------+
    | P00001    | 1.44floppies |             19 |
    | P07965    | 540 HDD      |              1 |
    | P07885    | CD Drive     |              2 |
    | P07868    | Keyboards    |              3 |
    | P03453    | Monitors     |              6 |
    | P06734    | Mouse        |              1 |
    | P07975    | 1.44 Drive   |              3 |
    +-----------+--------------+----------------+
    
C . Calculate the average qty sold for each client that has a maximum order value of 15000.00.
 
    create or replace view HOE091122_1_c as
    select c.Clientno,c.Name,avg(sod.QTYDISP) as "Avg. sales on SALES_ORDER_DETAILS"
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod
    where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
    group by c.Clientno
    having max(sod.QTYORDERED*sod.PRODUCTRATE)>15000;

    create or replace view HOE091122_1_C as
    select c.Clientno,c.Name,avg(sod.QTYDISP) as "Avg. sales on SALES_ORDER_DETAILS",max(sod.QTYORDERED*sod.PRODUCTRATE)
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod
    where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
    group by c.Clientno
    having max(sod.QTYORDERED*sod.PRODUCTRATE)>15000;

    select * from HOE091122_1_C;

    +----------+------+-----------------------------------+-------------------------------------+
    | Clientno | Name | Avg. sales on SALES_ORDER_DETAILS | max(sod.QTYORDERED*sod.PRODUCTRATE) |
    +----------+------+-----------------------------------+-------------------------------------+
    | C00001   | Ivan |                            2.5000 |                           120000.00 |
    +----------+------+-----------------------------------+-------------------------------------+


D. Find out the total of all the billed orders for month of 10.

    create or replace view HOE091122_1_D as
    select CLIENTNO,SALESMANNO,BILLYN,DELYDATE,ORDERSTATUS
    from SALES_ORDER
    where BILLYN="Y" and MONTH(DELYDATE)=10;

    create or replace view HOE091122_1_D as
    select ORDERNO,CLIENTNO,SALESMANNO,BILLYN,DELYDATE,ORDERSTATUS
    from SALES_ORDER
    where  BILLYN="Y"
    group by CLIENTNO
    having 10=(MONTH(DELYDATE));

    select * from HOE091122_1_D;
   
    +---------+----------+------------+--------+------------+-------------+
    | ORDERNO | CLIENTNO | SALESMANNO | BILLYN | DELYDATE   | ORDERSTATUS |
    +---------+----------+------------+--------+------------+-------------+
    | O00004  | C00001   | S00001     | Y      | 2022-10-14 | Fulfilled   |
    | O00003  | C00003   | S00003     | Y      | 2022-10-13 | Fulfilled   |
    +---------+----------+------------+--------+------------+-------------+


2. Exercises on joins and Correlation.


A. Find out the Product, which have been sold to "Ivan Bayross".
  
    create or replace view HOE091122_2_A as
    select c.Clientno,c.Name,sod.orderno,sod.PRODUCTNO,p.Description
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where c.Clientno=so.Clientno and so.ORDERNO = sod.ORDERNO
    and c.name =  "Ivan"; 

    create or replace view HOE091122_2_A as
    select client_master.Clientno,client_master.Name,SALES_ORDER_DETAILS.orderno,SALES_ORDER_DETAILS.PRODUCTNO
    from  ((client_master 
    inner join SALES_ORDER on  client_master.Clientno= SALES_ORDER.Clientno)
    inner join SALES_ORDER_DETAILS on SALES_ORDER.ORDERNO = SALES_ORDER_DETAILS.ORDERNO)
    where client_master.name =  "Ivan"  ; 

    select * from HOE091122_2_A;

B. Find out the products and their quantities that will have to be delivered in current month.

   create or replace view HOE091122_2_B as
   select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYORDERED,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
   from  ((product_master 
   inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
   inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
   where 10=(MONTH(DELYDATE)) ; 

   +-----------+--------------+------------+---------+------------+
   | productno | Description  | QTYORDERED | QTYDISP | DELYDATE   |
   +-----------+--------------+------------+---------+------------+
   | P00001    | 1.44floppies |          1 |       4 | 2022-10-11 |
   | P07965    | 540 HDD      |          2 |       1 | 2022-10-11 |
   | P07885    | CD Drive     |          3 |       1 | 2022-10-11 |
   | P00001    | 1.44floppies |          4 |       0 | 2022-10-11 |
   | P07868    | Keyboards    |          5 |       3 | 2022-10-11 |
   | P07885    | CD Drive     |          6 |       1 | 2022-10-11 |
   | P00001    | 1.44floppies |          7 |      10 | 2022-10-11 |
   | P03453    | Monitors     |          8 |       4 | 2022-10-11 |
   | P03453    | Monitors     |          9 |       2 | 2022-10-11 |
   | P06734    | Mouse        |         10 |       1 | 2022-10-11 |
   | P07965    | 540 HDD      |         11 |       0 | 2022-10-11 |
   | P07975    | 1.44 Drive   |         12 |       0 | 2022-10-11 |
   | P00001    | 1.44floppies |         13 |       5 | 2022-10-11 |
   | P07975    | 1.44 Drive   |         14 |       3 | 2022-10-11 |
   +-----------+--------------+------------+---------+------------+

   create or replace view HOE091122_2_B as
   select product_master.productno,product_master.Description ,SALES_ORDER_DETAILS.QTYORDERED,SALES_ORDER_DETAILS.QTYDISP,sales_order.DELYDATE 
   from  ((product_master 
   inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
   inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
   where MONTH(CURDATE())=(MONTH(DELYDATE)) ; 

   select * from HOE091122_2_B;

   Empty set becuase no entery today in SALES_ORDER table.

C. List the Productno and description of constantly sold(I.E rapidly moving) products.

   select product_master.productno,product_master.Description 
   from  ((product_master 
   inner join SALES_ORDER_DETAILS on product_master.productno=SALES_ORDER_DETAILS.PRODUCTNO)
   inner join sales_order on SALES_ORDER.orderno=SALES_ORDER_DETAILS.orderno)
   where  ; 


D. Find the name of client who have purchased "Trousers";

   select client_master.name 
   from (((client_master
   inner join sales_order on  sales_order.Clientno = client_master.Clientno )
   inner join SALES_ORDER_DETAILS on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
   inner join product_master on product_master.productno = SALES_ORDER_DETAILS.productno)
   where product_master.description = "Monitors";


   select client_master.name ,product_master.productno
   from (((product_master
   inner join  SALES_ORDER_DETAILS on product_master.productno = SALES_ORDER_DETAILS.productno)
   inner join sales_order on  SALES_ORDER_DETAILS.orderno = sales_order.orderno)
   inner join client_master on  sales_order.Clientno = client_master.Clientno )
   where product_master.description = "Monitors";

   +------+-----------+
   | name | productno |
   +------+-----------+
   | Ivan | P03453    |
   | Ivan | P03453    |
   +------+-----------+

   
  