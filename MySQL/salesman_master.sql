create table salesman_master( 
    Salesman_no varchar(50),
 Salesmanname varchar(50),
  Address varchar(50), 
  City varchar(50),
   Pincode numeric(38),
    State varchar(50), 
    Salamt numeric(38),
     Tgttoget numeric(38),
      Ytdsale numeric(38),
      Remark varchar(38),
      constraint pk_salesman_master
  primary key (salesman_no)
       );

insert into salesman_master values ('S00001', 'Kiran', 'A/14 worli', 'Bombay', 400002, 'Mah', 3000, 100, 50, 'Good');
 insert into salesman_master values ('S00002', 'Manish', '65, nariman', 'Bombay',400001, 'Mah', 3000, 200, 100, 'Good');
  insert into salesman_master values ('S00003', 'Ravi', 'P-7 Bandra', 'Bombay', 400032, 'Mah', 3000, 200, 100, 'Good'); 
  insert into salesman_master values ('S00004', 'Ashish', 'A/5 Juhu', 'Bombay', 400044, 'Mah', 3500, 200, 150, 'Good');

select * from salesman_master;