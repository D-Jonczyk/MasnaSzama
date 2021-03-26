LOAD DATA
INFILE cook.csv
INTO TABLE cook
REPLACE
FIELDS TERMINATED BY ","
(
person_id,email_address,first_name,last_name,phone_number

)