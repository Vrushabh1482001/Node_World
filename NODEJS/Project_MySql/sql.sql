mysql -u root -p
show databases;
use Vrushabh;

create table users(id int primary key AUTO_INCREMENT,
name varchar(15),
email varchar(25),position varchar(25));

