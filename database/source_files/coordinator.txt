LOAD DATA
INFILE coordinator.csv
INTO TABLE coordinator
REPLACE
FIELDS TERMINATED BY ","
(
person_id,email_address,first_name,last_name,phone_number

)