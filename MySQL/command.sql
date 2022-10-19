--\sql   

--\connect root@localhost:3309 

--admin@123                

--y\n                  

--show databases;          

--create database name;   

--show databases;      

--use databasename;  

--show tables;  

--*** create table***
-- create table tablename(colname datatype,.,.,.,.);   

--***Inseert value***   
-- insert into tablename values(.,.,.),(.,.,.),(.,.,);   

--	***Update***
--	update tablename set columnname='changes' where uniquecolumnname='value';

--***Show table ***
-- select * from tablename;   

--*** Show structur***
-- describe tablename; 

--	***Add column***
--	alter table tablename add column columname datatype;

--	***Rename colum***
--	alter table tablename rename column columname to newcolumname;

--	***Record delete***
--       delete from tablename where uniquecolumnname in (delete); 

--	***Remove all Record delete permanently***
--	truncate  table tablename;

--	***Table delete***
--	drop table tablename;

--	***Table delete***
--	drop table tablename; 

-- DDL(Data Definition Language)
--    ***Create column***
--	create table tablename(colname datatype,.,.,.,.);
--	
--	***Add column***
--	alter table tablename add column columname datatype;
--
--	***Rename colum***
--	alter table tablename rename column columname to newcolumname;
--
--	***Remove all Record delete permanently***
	truncate  table product_master;
--
--	***Table delete***
--	drop table tablename;  
--	
--DML(Data Manipulation Language)
--  ***Insert values***
--	insert into tablename values(.,.,.),(.,.,.),(.,.,);
--
--	***Update***
--	update tablename set columnname='changes' where uniquecolumnname='value';
--
--	***Record delete***
--       delete from tablename where uniquecolumnname in (delete); 
--
--	***Table delete***
--	drop table tablename; 

--***exit***
-- \quit