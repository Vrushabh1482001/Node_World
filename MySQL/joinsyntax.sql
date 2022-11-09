**INNER JOIN**

  select Columns from Table1 inner join Table2 on Table1.Column_name = Table2.Column_name;

    select Columns
    from ((Table1 inner join Table2 on Table1.Column_name = Table2.Column_name)
    inner join Shippers on Table1.Column_name = Table3.Column_name);
 
  select products.code,products.name,manufacturers.name,products.price from products inner join manufacturers on products.manufacturer=manufacturers.code;
  select products.code,products.name,manufacturers.name,products.price from manufacturers inner join products on products.manufacturer=manufacturers.code;

**LEFT JOIN**

  select Columns from Table1 left join Table2 on Table1.Column_name = Table2.Column_name;

  select products.code,products.name,manufacturers.name,products.price from products left join manufacturers on products.manufacturer=manufacturers.code;
  select products.code,products.name,manufacturers.name,products.price from manufacturers left join products on products.manufacturer=manufacturers.code;

**RIGHT JOIN**

  select Columns from Table1 right join Table2 on Table1.Column_name = Table2.Column_name;
  
  select products.code,products.name,manufacturers.name,products.price from products right join manufacturers on products.manufacturer=manufacturers.code;
  select products.code,products.name,manufacturers.name,products.price from manufacturers right join products on products.manufacturer=manufacturers.code;

**FULL OUTER JOIN**

  select Columns from Table1 full outer join Table2 on Table1.Column_name = Table2.Column_name;
  
  select products.code,products.name,manufacturers.name,products.price from products full outer join manufacturers on products.manufacturer=manufacturers.code;
  select products.code,products.name,manufacturers.name,products.price from manufacturers full outer join products on products.manufacturer=manufacturers.code;  

**CROSS JOIN**

  select Columns from Table1 cross join Table2;
  select products.code,products.name,manufacturers.name,products.price from products cross join manufacturers;
  select products.code,products.name,manufacturers.name,products.price from manufacturers cross join products;  

**SELF JOIN**

select Columns from table1 T1, table1 T2 where condition;


