LOAD DATA
INFILE payment.csv
INTO TABLE payment
REPLACE
FIELDS TERMINATED BY ","
(
	payment_id

)