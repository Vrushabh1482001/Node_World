--*** Hand On Exercises Date : 09/11/2022 ***--

1. Exercises on using Having and group by calauses :

A . Print the description and total qty sold for each product.
 
    create or replace view HOE091122_1_A as
    select p.productno,p.Description, sum(sod.QTYORDERED) 
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    group by p.productno;

    select * from HOE091122_1_A;

    +-----------+--------------+-------------------+
    | productno | Description  | sum(s.QTYORDERED) |
    +-----------+--------------+-------------------+
    | p00001    | 1.44floppies |                34 |
    | p07965    | 540 HDD      |                 3 |
    | p07885    | CD Drive     |                 5 |
    | p07868    | keyboards    |                 3 |
    | p03453    | monitors     |                 6 |
    | p06734    | mouse        |                 1 |
    | p07975    | 1.44 Drive   |                 6 |
    +-----------+--------------+-------------------+

B . Find the value of each product sold.
 
    create or replace view HOE091122_1_B as
    select p.productno,p.Description, sum(SOD.QTYDISP) 
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    group by p.productno;

    select * from HOE091122_1_B;

    +-----------+--------------+----------------+
    | productno | Description  | sum(s.QTYDISP) |
    +-----------+--------------+----------------+
    | p00001    | 1.44floppies |             19 |
    | p07965    | 540 HDD      |              1 |
    | p07885    | CD Drive     |              2 |
    | p07868    | keyboards    |              3 |
    | p03453    | monitors     |              6 |
    | p06734    | mouse        |              1 |
    | p07975    | 1.44 Drive   |              3 |
    +-----------+--------------+----------------+
    
C . Calculate the average qty sold for each client that has a maximum order value of 15000.00.

    create or replace view HOE091122_1_C as
    select c.Clientno,c.Name,avg(sod.QTYDISP) as "Avg. sales on SALES_ORDER_DETAILS",max(sod.QTYORDERED*sod.PRODUCTRATE)
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    group by c.Clientno
    having max(sod.QTYORDERED*sod.PRODUCTRATE)>15000;

    select * from HOE091122_1_C;

    +----------+---------+-----------------------------------+-------------------------------------+
    | Clientno | Name    | Avg. sales on SALES_ORDER_DETAILS | max(sod.QTYORDERED*sod.PRODUCTRATE) |
    +----------+---------+-----------------------------------+-------------------------------------+
    | C00001   | Ivan    |                            1.8000 |                            16800.00 |
    | C00003   | Pramada |                            4.5000 |                            15750.00 |
    +----------+---------+-----------------------------------+-------------------------------------+

D. Find out the total of all the billed orders for month of 10.

    create or replace view HOE091122_1_D as
    select MONTH(so.ORDERDATE) as "Octomber",sum(sod.QTYORDERED) as "Total"
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    group by so.ORDERDATE
    having  10=(MONTH(so.ORDERDATE));

    select * from HOE091122_1_D;
   
    +------------+-------+
    | ORDERDATE  | Total |
    +------------+-------+
    | 2022-10-12 |    58 |
    +------------+-------+ 


2. Exercises on joins and Correlation.


A. Find out the Product, which have been sold to "Ivan Bayross".

    create or replace view HOE091122_2_A as
    select C.Clientno,C.Name,SOD.orderno,SOD.PRODUCTNO
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and C.name =  "Ivan"  ; 

    select * from HOE091122_2_A;

    +----------+------+---------+-----------+
    | Clientno | Name | orderno | PRODUCTNO |
    +----------+------+---------+-----------+
    | C00001   | Ivan | O00001  | P00001    |
    | C00001   | Ivan | O00001  | P07965    |
    | C00001   | Ivan | O00001  | P07885    |
    | C00001   | Ivan | O00001  | P00001    |
    | C00001   | Ivan | O00001  | p07868    |
    | C00001   | Ivan | O00001  | P07885    |
    | C00001   | Ivan | O00001  | P00001    |
    | C00001   | Ivan | O00001  | P03453    |
    | C00001   | Ivan | O00001  | P03453    |
    | C00001   | Ivan | O00001  | P06734    |
    | C00001   | Ivan | O00001  | P07965    |
    | C00001   | Ivan | O00001  | P07975    |
    | C00001   | Ivan | O00001  | P00001    |
    | C00001   | Ivan | O00001  | P07975    |
    +----------+------+---------+-----------+

B. Find out the products and their quantities that will have to be delivered in current month.
 
    create or replace view HOE091122_2_B as
    select P.productno,P.Description ,SOD.QTYORDERED,SOD.QTYDISP,SO.ORDERDATE
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and 10=(MONTH(DELYDATE)) ; 

    create or replace view HOE091122_2_B as
    select P.productno,P.Description ,SOD.QTYORDERED,SOD.QTYDISP,SO.ORDERDATE
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and SO.ORDERDATE < "2022-10-15"; 

 
    +-----------+--------------+------------+---------+------------+
    | productno | Description  | QTYORDERED | QTYDISP | DELYDATE   |
    +-----------+--------------+------------+---------+------------+
    | p00001    | 1.44floppies |          4 |       4 | 2020-10-02 |
    | p07965    | 540 HDD      |          2 |       1 | 2020-10-02 |
    | p07885    | CD Drive     |          2 |       1 | 2020-10-02 |
    | p00001    | 1.44floppies |         10 |       0 | 2027-12-02 |
    | p03453    | monitors     |          2 |       2 | 2007-12-02 |
    | p06734    | mouse        |          1 |       1 | 2007-12-02 |
    | p00001    | 1.44floppies |         10 |       5 | 2026-09-02 |
    | p07975    | 1.44 Drive   |          5 |       3 | 2026-09-02 |
    | p07868    | keyboards    |          3 |       3 | 2020-09-02 |
    | p07885    | CD Drive     |          3 |       1 | 2020-09-02 |
    | p00001    | 1.44floppies |         10 |      10 | 2020-09-02 |
    | p03453    | monitors     |          4 |       4 | 2020-09-02 |
    | p07965    | 540 HDD      |          1 |       0 | 2022-06-02 |
    | p07975    | 1.44 Drive   |          1 |       0 | 2022-06-02 |
    +-----------+--------------+------------+---------+------------+


    create or replace view HOE091122_2_B as
    select P.productno,P.Description ,SOD.QTYORDERED,SOD.QTYDISP,SO.ORDERDATE
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and MONTH(CURDATE())=(MONTH(SO.ORDERDATE)) ; 

    select * from HOE091122_2_B;

    Empty set becuase no entery today in SALES_ORDER table.

C. List the Productno and description of constantly sold(I.E rapidly moving) products.
 
    create or replace view HOE091122_2_C as
    select p.productno,P.Description,sum(SOD.QTYORDERED) as "Sum"
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    group by SOD.productno
    order by sum(SOD.QTYORDERED) desc limit 1;


    select * from HOE091122_2_C;
   
    +-----------+--------------+------+
    | productno | Description  | Sum  |
    +-----------+--------------+------+
    | p00001    | 1.44floppies |   34 |
    +-----------+--------------+------+

   


D. Find the name of client who have purchased "Monitors";
  
    create or replace view HOE091122_2_D as
    select c.Name,p.productno
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and p.description = "Monitors"; 

    select * from HOE091122_2_D;

    +---------+-----------+
    | Name    | productno |
    +---------+-----------+
    | Ivan    | p03453    |
    | Pramada | p03453    |
    +---------+-----------+


E. List the products and orders from customers who have ordered less than 5 unit of "Keybords".

    create or replace view HOE091122_2_E as
    select p.Productno ,p.Description,c.Clientno,c.name,sod.QTYORDERED as "keybord"
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and  sod.QTYORDERED<5 and P.description="Keyboards";  

    select * from HOE091122_2_E;

    +-----------+--------------+----------+------+-----------+
    | Productno | Description  | Clientno | name | Pull Over |
    +-----------+--------------+----------+------+-----------+
    | P00001    | 1.44floppies | C00001   | Ivan |         1 |
    | P07965    | 540 HDD      | C00001   | Ivan |         2 |
    | P07885    | CD Drive     | C00001   | Ivan |         3 |
    | P00001    | 1.44floppies | C00001   | Ivan |         4 |
    +-----------+--------------+----------+------+-----------+


F. Find the product and their quantities for the orders placed by "Iven" and "Ravi" :

    create or replace view HOE091122_2_F as
    select P.Productno ,P.Description,C.Clientno,C.name,SOD.QTYORDERED 
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and (C.name = "Ivan" or C.name = "Ravi");

    select * from HOE091122_2_F;

    +-----------+--------------+----------+------+------------+
    | Productno | Description  | Clientno | name | QTYORDERED |
    +-----------+--------------+----------+------+------------+
    | p00001    | 1.44floppies | C00001   | Ivan |          4 |
    | p07965    | 540 HDD      | C00001   | Ivan |          2 |
    | p07885    | CD Drive     | C00001   | Ivan |          2 |
    | p03453    | monitors     | C00001   | Ivan |          2 |
    | p06734    | mouse        | C00001   | Ivan |          1 |
    | p00001    | 1.44floppies | C00005   | Ravi |         10 |
    | p07975    | 1.44 Drive   | C00005   | Ravi |          5 |
    +-----------+--------------+----------+------+------------+


G. Find the product and their quantities for the orders placed by  clientno = "C00001" and clientno = "C00002".

    create or replace view HOE091122_2_G as
    select P.Productno ,P.Description,C.Clientno,C.name,SOD.QTYORDERED 
    from  client_master c , SALES_ORDER so, SALES_ORDER_DETAILS sod,product_master p
    where p.productno=sod.productno and so.orderno=sod.orderno and so.Clientno = c.Clientno
    and (C.clientno = "C00001" or C.clientno = "C00002");
  
    select * from HOE091122_2_G;

    +-----------+--------------+----------+---------+------------+
    | Productno | Description  | Clientno | name    | QTYORDERED |
    +-----------+--------------+----------+---------+------------+
    | p00001    | 1.44floppies | C00001   | Ivan    |          4 |
    | p07965    | 540 HDD      | C00001   | Ivan    |          2 |
    | p07885    | CD Drive     | C00001   | Ivan    |          2 |
    | p03453    | monitors     | C00001   | Ivan    |          2 |
    | p06734    | mouse        | C00001   | Ivan    |          1 |
    | p00001    | 1.44floppies | C00002   | Vandana |         10 |
    +-----------+--------------+----------+---------+------------+
    
   
3. Exercises On Sub_Queries :

A. Find the productno, and description of non-moving products i.e product not bigning sold.

   
    create or replace view HOE091122_3_A as
    select productno,description
    from product_master
    where productno not in (select PRODUCTNO from SALES_ORDER_DETAILS );
     
    select * from HOE091122_3_A;

    +-----------+---------------+
    | productno | description   |
    +-----------+---------------+
    | P07865    | 1.22 floppies |
    | P08865    | 1.22 Drive    |
    +-----------+---------------+


B. List the customers name , Address1 ,Address2 , City , PinCode for the client who placed orderno = "O00001"  :

   
    create or replace view HOE091122_3_B as
    select clientno,Name,city,pincode,state
    from client_master
    where clientno not in (select CLIENTNO from SALES_ORDER where orderno != "O00001");


    select * from HOE091122_3_B;

    +----------+------+--------+---------+-------------+
    | clientno | Name | city   | pincode | state       |
    +----------+------+--------+---------+-------------+
    | C00001   | Ivan | Bombay |  400054 | Maharashtra |
    +----------+------+--------+---------+-------------+

C. List the client names that have placed orders before the month of may 2 :

    create or replace view HOE091122_3_C as
    select clientno,Name
    from client_master
    where clientno in (select Clientno from SALES_ORDER where ORDERDATE < "2022-10-14");

    select * from HOE091122_3_C;

    +----------+---------+
    | clientno | Name    |
    +----------+---------+
    | C00001   | Ivan    |
    | C00002   | Vandana |
    | C00003   | Pramada |
    | C00004   | Basu    |
    | C00005   | Ravi    |
    +----------+---------+


D. List if the product "1.44floppies" has been ordered by any client and print clientno,name to whom it was sold.

    create or replace view HOE091122_3_D as
    select clientno,Name
    from client_master
    where clientno in (select clientno from SALES_ORDER where orderno in
     (select orderno from SALES_ORDER_DETAILS where productno in  
     (
        select Productno from product_master where description = "1.44floppies")));

    select * from HOE091122_3_D;

    +----------+---------+
    | clientno | Name    |
    +----------+---------+
    | C00001   | Ivan    |
    | C00002   | Vandana |
    | C00003   | Pramada |
    | C00005   | Ravi    |
    +----------+---------+


E. List the names of client who have placed orders wroth Rs. 10000 or more.

    create or replace view HOE091122_3_E as
    select clientno,name
    from client_master
    where clientno in (select clientno from SALES_ORDER where orderno in (select orderno from SALES_ORDER_DETAILS where productno in  (select Productno from product_master where Sellprice >= 10000)));

    
    select * from HOE091122_3_E;
    
    +----------+---------+
    | clientno | name    |
    +----------+---------+
    | C00001   | Ivan    |
    | C00003   | Pramada |
    +----------+---------+
