select products.code,products.name,manufacturers.name,price from products inner join manufacturers on products.manufacturer=manufacturers.name;