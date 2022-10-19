create table product_master( Productno varchar(50), 
Description varchar(50), 
Profitpercent numeric(38,2),
 Unitmeasured varchar(50), 
 Qtyonhand numeric(38), 
 Recorderlvl numeric(38),
  Sellprice numeric(38), 
  Costprice numeric(38),
  constraint pk_product_master
  primary key (productno)
);


insert into product_master values ('P00001','1.44floppies',5, 'piece', 100, 20, 525,500); 
insert into product_master values ('P03453', 'Monitors', 6, 'piece', 10, 3, 12000, 11200); 
insert into product_master values ('P06734', 'Mouse',5, 'piece', 20, 5, 1050, 500); 
insert into product_master values ('P07865', '1.22 floppies',5, 'piece', 100, 20, 525, 500); 
insert into product_master values ('P07868', 'Keyboards', 2, 'piece', 10, 3, 3150, 3050); 
insert into product_master values ('P07885', 'CD Drive',2.50, 'piece',10,3,5250,5100); 
insert into product_master values ('P07965', '540 HDD',4, 'piece',10,3,8400, 8000); 
insert into product_master values ('P07975', '1.44 Drive',5, 'piece', 10, 3, 1050, 1000);
 insert into product_master values ('P08865', '1.22 Drive',5, 'piece',2,3, 1050, 1000); 

 select * from product_master;