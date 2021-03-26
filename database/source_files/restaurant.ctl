LOAD DATA
INFILE restaurant.csv
INTO TABLE restaurant
REPLACE
FIELDS TERMINATED BY ","
(
	restaurant_id,description,name,address_id
)