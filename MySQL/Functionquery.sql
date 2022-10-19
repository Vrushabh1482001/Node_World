--QUERIES:-

--1. List the name of all client having 'a' as the second letter in their names.
    select name from client_master where name like "_a%";
--2. list the clients who stays in a city whose first letter is 'M'.
    select city from client_master where city like "m%";
--3 list the client who stay in 'bangalore' or 'Mangalore'
    select city  from client_master where city = "Bangalore" orcity = "Mangalore";
--4 list all client whose baldue is greater than value 10000.
    select baldue from client_master where baldue>10000;
--5 list the all information from the sales_order table for orders placed in the month of june.
    select * from sales_order where month(DELYDATE)=10;
--6 list the order information for ClientNo 'C00001' and 'C00002'
    select Orderno,Clientno from sales_order where Clientno = "C00001" or Clientno ="C00002";
--7 list products whose selling price is greater than 500 and less than or equal to 750.
    select * from product_master where Sellprice between 500 and 750;
-- 8 list products whose selling price is more than 500. Calculate a new selling price as, original selling price*.15.Rename the new column in the output of the above query as new-price.
    alter table product_master add column New_Price int;
    update product_master set New_Price = (Sellprice +(Sellprice*0.15));
--9 list the names,city and state of client who are not in the state of 'Maharashtra'.
     select name,city,state from client_master where state not in ("Maharashtra"); 
--10 count the total number of orders.
    select count(orderno) from sales_order;
--11 calculate the average of all products.
    select AVG(sellprice) from product_master;
--12 Determind the maximum and minimum products price.Rename the output as max_price and min_price respectively
    select max(sellprice) as Max_price ,min(sellprice) as min_price from product_master;
--13 count the number of products having price less than or equal to 500.
    select count(sellprice) from product_master where sellprice<=500;
--14 list all the products whose QtyOnHand is less than reorder level.
    select * from product_master where qtyonhand<recorderlvl;