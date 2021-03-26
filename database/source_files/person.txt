LOAD DATA
INFILE person.csv
INTO TABLE person
REPLACE
FIELDS TERMINATED BY ","
(
	person_id,email_address,first_name,last_name,phone_number
)