mysql -u root -p
show databases;
use Vrushabh;

-- //users

create table Users(id int NOT NULL AUTO_INCREMENT,
    name varchar(30),
    email varchar(30),
    passwordHash varchar(15),
    street varchar(30),
    apartment varchar(30),
    city varchar(30),
    zip numeric(6),
    country varchar(30),
    phone numeric(10),
    isAdmin Boolean,
    CONSTRAINT PK_Users PRIMARY KEY(id) 
);


-- //produts

create table  Products(id int NOT NULL AUTO_INCREMENT,
    name varchar(30),
    description varchar(300),
    richdescription varchar(300),
    image varchar(30),
    images varchar(30),
    brand varchar(30),
    price int ,
    category int,
    countInStock int,
    ratin int,
    isFeatured Boolean,
    dateCreated datetime,
    CONSTRAINT PK_Products PRIMARY KEY(id) 
    CONSTRAINT FK_Category foreign key(category) references Category(id)
);

-- //category

create table  Category(id int primary key AUTO_INCREMENT,
    name varchar(30),
    color varchar(30),
    icon varchar(30),
    image varchar(30)
);

-- //orders

create table  Orders(id int primary key AUTO_INCREMENT,
    orderitems JSON,
    shippingAddress1 varchar(100),
    shippingAddress2 varchar(100),
    city varchar(30),
    zip numeric(6),
    country varchar(30),
    phone numeric(10),
    status varchar(30),
    totalPrice int,
    user int,
    dateOrdered datetime,
    CONSTRAINT FK_Order foreign key(orderitems) references Orderitems(id),
    CONSTRAINT FK1_Order foreign key(user) references Users(id)
);


-- // orderitems

create table  Orderitems(id int primary key AUTO_INCREMENT,
    quantity int,
    product int
    CONSTRAINT FK_Orderitems foreign key(product) references Products(id)
);


-- // joinquary

select p.price
    from  Users u , Category c, Products p, Orders o , Orderitems oi,
    where  p.category = c.id and o.user = u.id and oi.product = p.id and p.id = ?
    group by u.id
