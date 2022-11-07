create table student(
    Gr_no varchar(6),
    Name varchar(30),
    Standard int,
    BOD date,
    Gender varchar(10),
    Address varchar(30),
    Contact int(10),
    constraint pk_student 
    primary key (Gr_no)
);
insert into student values("V0001","Satasiya Vrushabh",12,"2001-08-14","Male","Sarathana",7069182001);
insert into student values("V0002","Sojitra Krunal",12,"2002-04-18","Male","Varacha",9723420617);
insert into student values("V0003","Dhameliya Yash",12,"2001-02-15","Male","Kosamada",7778074333);
insert into student values("V0004","Chovatiya Parth",12,"2003-02-16","Male","Vraj",9856471223);
insert into student values("V0005","Thummar Kinjal",12,"2001-10-13","Female","Yogi",9856741523);
insert into student values("V0006","Kumbhani Nency",12,"2003-01-11","Female","Bhagavati",9856741236);

 alter table student add column Age varchar(50);
 update student set Age= date_format(from_days(datediff(now(),BOD)),"%y Year %m Month %d Day");

 select * from student;
