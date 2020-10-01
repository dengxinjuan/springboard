-- Comments in SQL Start with dash-dash --
--insert chair into products table--
INSERT INTO products (name,price,can_be_returned) VALUES ('chair',44.00,false);

-- insert stool into products table--

INSERT INTO products (name,price,can_be_returned) VALUES ('stool',25.99,true);

-- insert table into product table--

INSERT INTO products (name,price,can_be_returned) VALUES('table',124.00,false);

--display all of rowws and colums in the products--

SELECT * FROM products;

--display all names --

 SELECT name FROM products;

 --display all names and prices in the products--

 SELECT name,price FROM products;

 --add a new product--

 INSERT INTO products (name,price,can_be_returned) VALUES('childrentable',89.00,true);


---Display only the products that have a price less than 44.00.---
SELECT name FROM products WHERE price <=44.00;


--Display only the products that have a price in between 22.50 and 99.99.---

SELECT name,price FROM products WHERE price >22.50 and price <99.99;


---There’s a sale going on: Everything is $20 off! Update the database accordingly.---
UPDATE products SET price = price -20;

--Because of the sale, everything that costs less than $25 has sold out. Remove all products whose price meets this criteria.--
DELETE FROM products WHERE price<25;

---And now the sale is over. For the remaining products, increase their price by $20.---
UPDATE products SET price = price +20;


--There is a new company policy: everything is returnable. Update the database accordingly.--
UPDATE products SET can_be_returned = true;




