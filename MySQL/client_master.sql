create table CLIENT_MASTER(
   Clientno varchar(50) ,
   Name varchar(50),
   address1 varchar(30) ,
   city varchar(50),
   pincode numeric(38),
   state varchar(50),
   baldue numeric(38),
   CONSTRAINT pk_Category PRIMARY KEY(Clientno)
);
insert into CLIENT_MASTER values('C00001','Ivan','A/14 worli', 'Bombay', 400054, 'Maharashtra', 15000);
insert into CLIENT_MASTER values('C00002','Vandana','B-23 vesu', 'Madras', 780001, 'Tamilnadu', 0);
insert into CLIENT_MASTER values('C00003', 'Pramada','65,nariman', 'Bombay', 400057, 'Maharashtra', 5000);
insert into CLIENT_MASTER values('C00004', 'Basu','p-7 Bandra', 'Bombay', 400056, 'Maharashtra', 0);
insert into CLIENT_MASTER values('C00005','Ravi','C-42 agra', 'Delhi', 100001, 'Delhi', 2000);
insert into CLIENT_MASTER values('C00006','Rukmini','A/5 Juhu', 'Bombay', 400050, 'Maharashtra', 0);

select * from CLIENT_MASTER;


-- +----------+---------+------------+--------+---------+-------------+--------+
-- | Clientno | Name    | address1   | city   | pincode | state       | baldue |
-- +----------+---------+------------+--------+---------+-------------+--------+
-- | C00001   | Ivan    | A/14 worli | Bombay |  400054 | Maharashtra |  15000 |
-- | C00002   | Vandana | B-23 vesu  | Madras |  780001 | Tamilnadu   |      0 |
-- | C00003   | Pramada | 65,nariman | Bombay |  400057 | Maharashtra |   5000 |
-- | C00004   | Basu    | p-7 Bandra | Bombay |  400056 | Maharashtra |      0 |
-- | C00005   | Ravi    | C-42 agra  | Delhi  |  100001 | Delhi       |   2000 |
-- | C00006   | Rukmini | A/5 Juhu   | Bombay |  400050 | Maharashtra |      0 |
-- +----------+---------+------------+--------+---------+-------------+--------+