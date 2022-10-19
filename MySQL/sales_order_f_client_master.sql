--     CREATE TABLE SALES_ORDER(
--     ORDERNO varchar(6),
--     CLIENTNO varchar(6),
--     ORDERDATE date,
--     DELYADDR varchar(25),
--     SALESMANNO varchar(6),
--     DALYTYPE char(1),
--     BILLYN char(1),
--     DELYDATE date,
--     ORDERSTATUS varchar(10),
--     CONSTRAINT pk_salesorder PRIMARY KEY(ORDERNO),
--     CONSTRAINT fk_SALES_ORDER foreign key(Clientno) references CLIENT_MASTER(Clientno),
--     CONSTRAINT fk1_SALES_ORDER foreign key(SALESMANNO) references SALESMAN_MASTER(salesman_no)
    
-- );

INSERT INTO SALES_ORDER VALUES('O00001','C00001',"2022-10-11",'A-2 malhar','S00001','F','N',"2022-10-11",'In Process');
INSERT INTO SALES_ORDER VALUES('O00002','C00002',"2022-10-12",'B-34 Bombay','S00002','P','N',"2022-10-12",'Cancelled');
INSERT INTO SALES_ORDER VALUES('O00003','C00003',"2022-10-13",'C-90 pune','S00003','F','Y',"2022-10-13",'Fulfilled');
INSERT INTO SALES_ORDER VALUES('O00004','C00001',"2022-10-14",'D-35 delhi','S00001','F','Y',"2022-10-14",'Fulfilled');
INSERT INTO SALES_ORDER VALUES('O00005','C00004',"2022-10-15",'A-22 Jaypur','S00002','P','N',"2022-10-15",'Cancelled');
INSERT INTO SALES_ORDER VALUES('O00006','C00005',"2022-10-16",'C-67 agra','S00004','F','N',"2022-10-16",'In Process');



select * from sales_order;