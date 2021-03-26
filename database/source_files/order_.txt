LOAD DATA
INFILE order_.csv
INTO TABLE order_
REPLACE
FIELDS TERMINATED BY ","
(
	order_id,tip,customer_id,payment_id,restaurant_id
)