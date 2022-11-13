create table manufacturers(Code int,
NAME varchar(50),
Constraint PK_Manufacturers primary key(Code));

create table products(Code int,
NAME varchar(50),
Price real,
Manufacturer int,
Constraint PK_products primary key(Code),
Constraint fK_products Foreign key(Manufacturer)
references manufacturers(Code)
);


insert into manufacturers values(1,"Sony");
insert into manufacturers values(2,"Creative Labs");
insert into manufacturers values(3,"Hewlett-Packard");
insert into manufacturers values(4,"Lomega");
insert into manufacturers values(5,"Fujitsu");
insert into manufacturers values(6,"winchester");

insert into products values(1,"Hard Drive",240,5);
insert into products values(2,"Memory",120,6);
insert into products values(3,"Zip drive",150,4);
insert into products values(4,"Floppy disk",5,6);
insert into products values(5,"Monitor",240,1);
insert into products values(6,"DVD drive",180,2);
insert into products values(7,"CD drive",90,2);
insert into products values(8,"Printer",270,3);
insert into products values(9,"Toner cartridge",66,3);
insert into products values(10,"DVD burner",180,2);

--1.1 Select the names of all the products in the store.
select name from products;
+-----------------+
| name            |
+-----------------+
| Hard Drive      |
| Memory          |
| Zip drive       |
| Floppy disk     |
| Monitor         |
| DVD drive       |
| CD drive        |
| Printer         |
| Toner cartridge |
| DVD burner      |
+-----------------+


--1.2 Select the names and the prices of all the products in the store.
select name,price from products;
+-----------------+-------+
| name            | price |
+-----------------+-------+
| Hard Drive      |   240 |
| Memory          |   120 |
| Zip drive       |   150 |
| Floppy disk     |     5 |
| Monitor         |   240 |
| DVD drive       |   180 |
| CD drive        |    90 |
| Printer         |   270 |
| Toner cartridge |    66 |
| DVD burner      |   180 |
+-----------------+-------+

--1.3 Select the name of the products with a price less than or equal to $200.
select name,price from products where price<=200;
+-----------------+-------+
| name            | price |
+-----------------+-------+
| Memory          |   120 |
| Zip drive       |   150 |
| Floppy disk     |     5 |
| DVD drive       |   180 |
| CD drive        |    90 |
| Toner cartridge |    66 |
| DVD burner      |   180 |
+-----------------+-------+

--1.4 Select all the products with a price between $60 and $120.
select * from products where price between 60 and 120;
+------+-----------------+-------+--------------+
| Code | NAME            | Price | Manufacturer |
+------+-----------------+-------+--------------+
|    2 | Memory          |   120 |            6 |
|    7 | CD drive        |    90 |            2 |
|    9 | Toner cartridge |    66 |            3 |
+------+-----------------+-------+--------------+

--1.5 Select the name and price in cents (i.e., the price must be multiplied by 100).
alter table products add column Cents real;
update products set Cents=price*100;
select name,price*100 "Centss" from products;
+-----------------+--------+
| name            | Centss |
+-----------------+--------+
| Hard Drive      |  24000 |
| Memory          |  12000 |
| Zip drive       |  15000 |
| Floppy disk     |    500 |
| Monitor         |  24000 |
| DVD drive       |  18000 |
| CD drive        |   9000 |
| Printer         |  27000 |
| Toner cartridge |   6600 |
| DVD burner      |  18000 |
+-----------------+--------+

--1.6 Compute the average price of all the products.
select avg(Price) from products;
+------------+
| avg(Price) |
+------------+
|      154.1 |
+------------+

--1.7 Compute the average price of all products with manufacturer code equal to 2.
select avg(Price) from products where Manufacturer = 2 ;
+------------+
| avg(Price) |
+------------+
|        150 |
+------------+

--1.8 Compute the number of products with a price larger than or equal to $180.
select count(name) from products where price>=180;
+-------------+
| count(name) |
+-------------+
|           5 |
+-------------+

--1.9 Select the name and price of all products with a price larger than or equal to $180, and sort first by price (in descending order), and then by name (in ascending order).
select name,price from products where price>=180 order by price;
+------------+-------+
| name       | price |
+------------+-------+
| DVD drive  |   180 |
| DVD burner |   180 |
| Hard Drive |   240 |
| Monitor    |   240 |
| Printer    |   270 |
+------------+-------+
select name,price from products where price>=180 order by price desc;
+------------+-------+
| name       | price |
+------------+-------+
| Printer    |   270 |
| Hard Drive |   240 |
| Monitor    |   240 |
| DVD drive  |   180 |
| DVD burner |   180 |
+------------+-------+

--1.10  Select all the data from the products, including all the data for each product's manufacturer.
select * from products inner join manufacturers on products.manufacturer=manufacturers.code;

select * from products where manufacturer in (select code from manufacturers);

+------+-----------------+-------+--------------+-------+------+-----------------+
| Code | NAME            | Price | Manufacturer | Cents | Code | NAME            |
+------+-----------------+-------+--------------+-------+------+-----------------+
|    1 | Hard Drive      | 194.4 |            5 | 24000 |    5 | Fujitsu         |
|    2 | Memory          |   108 |            6 | 12000 |    6 | winchester      |
|    3 | Zip drive       | 121.5 |            4 | 15000 |    4 | Lomega          |
|    4 | Floppy disk     |   4.5 |            6 |   500 |    6 | winchester      |
|    5 | Monitor         | 194.4 |            1 | 24000 |    1 | Sony            |
|    6 | DVD drive       | 145.8 |            2 | 18000 |    2 | Creative Labs   |
|    7 | CD drive        |    81 |            2 |  9000 |    2 | Creative Labs   |
|    8 | laser-Printer   | 218.7 |            3 | 27000 |    3 | Hewlett-Packard |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |    3 | Hewlett-Packard |
|   10 | DVD burner      | 145.8 |            2 | 18000 |    2 | Creative Labs   |
|   11 | Loudspeakers    |    63 |            2 |   700 |    2 | Creative Labs   |
+------+-----------------+-------+--------------+-------+------+-----------------+

--1.11  Select the product name, price, and manufacturer name of all the products.
select products.code,products.name,manufacturers.name,products.price from products inner join manufacturers on products.manufacturer=manufacturers.code;

select * from products where manufacturer in (select code from manufacturers);

+------+-----------------+-----------------+-------+
| code | name            | name            | price |
+------+-----------------+-----------------+-------+
|    1 | Hard Drive      | Fujitsu         | 194.4 |
|    2 | Memory          | winchester      |   108 |
|    3 | Zip drive       | Lomega          | 121.5 |
|    4 | Floppy disk     | winchester      |   4.5 |
|    5 | Monitor         | Sony            | 194.4 |
|    6 | DVD drive       | Creative Labs   | 145.8 |
|    7 | CD drive        | Creative Labs   |    81 |
|    8 | laser-Printer   | Hewlett-Packard | 218.7 |
|    9 | Toner cartridge | Hewlett-Packard |  59.4 |
|   10 | DVD burner      | Creative Labs   | 145.8 |
|   11 | Loudspeakers    | Creative Labs   |    63 |
+------+-----------------+-----------------+-------+

--1.12 Select the average price of each manufacturer's products, showing only the manufacturer's code.
select avg(price),b.code from products a,manufacturers b where b.code=a.manufacturer group by b.code;

select avg(price),manufacturer from products where manufacturer in (select code from manufacturers) group by manufacturer;


+------------+--------------+
| avg(price) | manufacturer |
+------------+--------------+
|        216 |            1 |
|        138 |            2 |
|      154.5 |            3 |
|        135 |            4 |
|        216 |            5 |
|       56.5 |            6 |
+------------+--------------+

--1.13 Select the average price of each manufacturer's products, showing the manufacturer's name.

select avg(price),b.name from products a,manufacturers b where b.code=a.manufacturer group by b.name;

select avg(price),manufacturer from products where manufacturer in (select code from manufacturers) group by manufacturer;

+--------------------+-----------------+
| avg(price)         | name            |
+--------------------+-----------------+
|              194.4 | Sony            |
|              108.9 | Creative Labs   |
| 139.04999999999998 | Hewlett-Packard |
|              121.5 | Lomega          |
|              194.4 | Fujitsu         |
|              56.25 | winchester      |
+--------------------+-----------------+

--1.14 Select the names of manufacturer whose products have an average price larger than or equal to $150.
select avg(a.price),b.name from products a,manufacturers b where b.code=a.manufacturer group by b.name having avg(price)>=150;
select manufacturers.name from manufacturers inner join products on products.manufacturer=manufacturers.code where Price > (SELECT AVG(Price) FROM Products) or price=150;


+------------+---------+
| avg(price) | name    |
+------------+---------+
|      194.4 | Sony    |
|      194.4 | Fujitsu |
+------------+---------+

--1.15 Select the name and price of the cheapest product.

select name , price from products where  price = (select min(price) from products);

select b.name,a.name,a.price from product a,manufacturers b where a.manufacturer=b.code and price = (select min(price) from products);

select code,name from manufacturers where code in (select manufacturer from  products where  price = (select min(price) from products));

+------------+-------------+-------+
| name       | name        | price |
+------------+-------------+-------+
| winchester | Floppy disk |   4.5 |
+------------+-------------+-------+

--1.16 Select the name of each manufacturer along with the name and price of its most expensive product.
select name , price from products where  price = (select max(price) from products); 
select b.name,a.name,a.price from products a,manufacturers b  where  a.Manufacturer=b.code group by b.name having max(price)=(select max(price) from products);

select code,name from manufacturers where code in (select manufacturer from  products where  price = (select max(price) from products));

+-----------------+---------------+-------+
| name            | name          | price |
+-----------------+---------------+-------+
| Hewlett-Packard | laser-Printer | 218.7 |
+-----------------+---------------+-------+


--1.17 Add a new product: Loudspeakers, $70, manufacturer 2.
insert into products values(11,"Loudspeakers",70,2,700);
select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   240 |            5 | 24000 |
|    2 | Memory          |   120 |            6 | 12000 |
|    3 | Zip drive       |   150 |            4 | 15000 |
|    4 | Floppy disk     |     5 |            6 |   500 |
|    5 | Monitor         |   240 |            1 | 24000 |
|    6 | DVD drive       |   180 |            2 | 18000 |
|    7 | CD drive        |    90 |            2 |  9000 |
|    8 | Printer         |   270 |            3 | 27000 |
|    9 | Toner cartridge |    66 |            3 |  6600 |
|   10 | DVD burner      |   180 |            2 | 18000 |
|   11 | Loudspeakers    |    70 |            2 |   700 |
+------+-----------------+-------+--------------+-------+

--1.18 Update the name of product 8 to "Laser Printer".
update products set name="laser-Printer" where code=8;
select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   240 |            5 | 24000 |
|    2 | Memory          |   120 |            6 | 12000 |
|    3 | Zip drive       |   150 |            4 | 15000 |
|    4 | Floppy disk     |     5 |            6 |   500 |
|    5 | Monitor         |   240 |            1 | 24000 |
|    6 | DVD drive       |   180 |            2 | 18000 |
|    7 | CD drive        |    90 |            2 |  9000 |
|    8 | laser-Printer   |   270 |            3 | 27000 |
|    9 | Toner cartridge |    66 |            3 |  6600 |
|   10 | DVD burner      |   180 |            2 | 18000 |
|   11 | Loudspeakers    |    70 |            2 |   700 |
+------+-----------------+-------+--------------+-------+

--1.19 Apply a 10% discount to all products.
select name,(price-(price*10)/100) "10% discount" from products;
update products set price=(price-(price*10)/100);

select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      |   216 |            5 | 24000 |
|    2 | Memory          |   108 |            6 | 12000 |
|    3 | Zip drive       |   135 |            4 | 15000 |
|    4 | Floppy disk     |   4.5 |            6 |   500 |
|    5 | Monitor         |   216 |            1 | 24000 |
|    6 | DVD drive       |   162 |            2 | 18000 |
|    7 | CD drive        |    81 |            2 |  9000 |
|    8 | laser-Printer   |   243 |            3 | 27000 |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |
|   10 | DVD burner      |   162 |            2 | 18000 |
|   11 | Loudspeakers    |    63 |            2 |   700 |
+------+-----------------+-------+--------------+-------+

--1.20 Apply a 10% discount to all products with a price larger than or equal to $120.
select name,(price-(price*10)/100) "10% discount" from products where price>=120;
update products set price=(price-(price*10)/100) where price>=120;
select * from products;
+------+-----------------+-------+--------------+-------+
| Code | NAME            | Price | Manufacturer | Cents |
+------+-----------------+-------+--------------+-------+
|    1 | Hard Drive      | 194.4 |            5 | 24000 |
|    2 | Memory          |   108 |            6 | 12000 |
|    3 | Zip drive       | 121.5 |            4 | 15000 |
|    4 | Floppy disk     |   4.5 |            6 |   500 |
|    5 | Monitor         | 194.4 |            1 | 24000 |
|    6 | DVD drive       | 145.8 |            2 | 18000 |
|    7 | CD drive        |    81 |            2 |  9000 |
|    8 | laser-Printer   | 218.7 |            3 | 27000 |
|    9 | Toner cartridge |  59.4 |            3 |  6600 |
|   10 | DVD burner      | 145.8 |            2 | 18000 |
|   11 | Loudspeakers    |    63 |            2 |   700 |
+------+-----------------+-------+--------------+-------+