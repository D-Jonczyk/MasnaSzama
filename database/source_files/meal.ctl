LOAD DATA
INFILE meal.csv
INTO TABLE meal
REPLACE
FIELDS TERMINATED BY ","
(
	meal_id,name,price
)