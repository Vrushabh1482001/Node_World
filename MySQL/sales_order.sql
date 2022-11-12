-- CREATE TABLE SALES_ORDER(
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

-- INSERT INTO SALES_ORDER VALUES("019001","C00001","2022-10-12","A-2 malhar","S00001","F","N","20-10-02","In Process");
-- INSERT INTO SALES_ORDER VALUES("019002","C00002","2022-10-12","B-34 Bombay","S00002","P","N","27-12-02","Cancelled");
-- INSERT INTO SALES_ORDER VALUES("046865","C00003","2022-10-12","C-90 pune","S00003","F","Y","20-09-02","Fulfilled");
-- INSERT INTO SALES_ORDER VALUES("019003","C00001","2022-10-12","D-35 delhi","S00001","F","Y","07-12-02","Fulfilled");
-- INSERT INTO SALES_ORDER VALUES("046866","C00004","2022-10-12","A-22 Jaypur","S00002","P","N","22-06-02","Cancelled");
-- INSERT INTO SALES_ORDER VALUES("019008","C00005","2022-10-12","C-67 agra","S00004","F","N","26-09-02","In Process");


+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+
| ORDERNO | CLIENTNO | ORDERDATE  | DELYADDR    | SALESMANNO | DALYTYPE | BILLYN | DELYDATE   | ORDERSTATUS |
+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+
| 019001  | C00001   | 2022-10-12 | A-2 malhar  | S00001     | F        | N      | 2020-10-02 | In Process  |
| 019002  | C00002   | 2022-10-12 | B-34 Bombay | S00002     | P        | N      | 2027-12-02 | Cancelled   |
| 019003  | C00001   | 2022-10-12 | D-35 delhi  | S00001     | F        | Y      | 2007-12-02 | Fulfilled   |
| 019008  | C00005   | 2022-10-12 | C-67 agra   | S00004     | F        | N      | 2026-09-02 | In Process  |
| 046865  | C00003   | 2022-10-12 | C-90 pune   | S00003     | F        | Y      | 2020-09-02 | Fulfilled   |
| 046866  | C00004   | 2022-10-12 | A-22 Jaypur | S00002     | P        | N      | 2022-06-02 | Cancelled   |
+---------+----------+------------+-------------+------------+----------+--------+------------+-------------+