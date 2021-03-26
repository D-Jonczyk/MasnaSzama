LOAD DATA
INFILE restaurants_meals.csv
INTO TABLE restaurants_meals
REPLACE
FIELDS TERMINATED BY ","
(
	restaurant_id,meal_id,image_path
)