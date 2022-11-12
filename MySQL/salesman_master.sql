
create table SALESMAN_MASTER(
    salesman_no varchar(50) ,
    salesmanname varchar(50) ,
    address varchar(50) ,
    city  varchar(50) ,
    pincode numeric(38) ,
    state varchar(50) ,
    salamt numeric(50) ,
    tgttoget numeric(50) ,
    ytdsale numeric(50) ,
    remark varchar(50),
    CONSTRAINT pk_Category PRIMARY KEY(salesman_no)

);
insert into SALESMAN_MASTER values('S00001','Kiran','A/14 worli','Bombay',400002,'Mah',3000,100,50,'Good');
insert into SALESMAN_MASTER values('S00002','Manish','65,nariman','Bombay',400001,'Mah',3000,200,100,'Good');
insert into SALESMAN_MASTER values('S00003','Ravi','p-7 Bandra','Bombay',400032,'Mah',3000,200,100,'Good');
insert into SALESMAN_MASTER values('S00004','Ashish','A/5 Juhu','Bombay',400044,'Mah',3500,200,150,'Good');


select * from SALESMAN_MASTER;

-- +-------------+--------------+------------+--------+---------+-------+--------+----------+---------+--------+
-- | salesman_no | salesmanname | address    | city   | pincode | state | salamt | tgttoget | ytdsale | remark |
-- +-------------+--------------+------------+--------+---------+-------+--------+----------+---------+--------+
-- | S00001      | Kiran        | A/14 worli | Bombay |  400002 | Mah   |   3000 |      100 |      50 | Good   |
-- | S00002      | Manish       | 65,nariman | Bombay |  400001 | Mah   |   3000 |      200 |     100 | Good   |
-- | S00003      | Ravi         | p-7 Bandra | Bombay |  400032 | Mah   |   3000 |      200 |     100 | Good   |
-- | S00004      | Ashish       | A/5 Juhu   | Bombay |  400044 | Mah   |   3500 |      200 |     150 | Good   |
-- +-------------+--------------+------------+--------+---------+-------+--------+----------+---------+--------+