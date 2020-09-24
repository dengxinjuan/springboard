---FIRST--

SELECT * FROM owners LEFT JOIN vehicles ON owners.id = vehicles.owner_id;

---SECOND--

SELECT first_name, last_name, 
  COUNT(owner_id) FROM owners o 
  JOIN vehicles v on o.id=v.owner_id 
  GROUP BY (first_name, last_name) 
ORDER BY first_name;


---LAST---

SELECT first_name,last_name,  COUNT(owner_id) as count, AVG(price) as average_price 

FROM owners JOIN vehicles ON owners.id = vehicles.owner_id

GROUP BY (first_name, last_name) 

HAVING  COUNT(owner_id)  >=1 AND AVG(price)> 10000

ORDER BY count DESC;
