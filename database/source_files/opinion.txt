LOAD DATA
INFILE opinion.csv
INTO TABLE opinion
REPLACE
FIELDS TERMINATED BY ","
(
	opinion_id,comment,rating

)