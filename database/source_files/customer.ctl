LOAD DATA
INFILE customer.csv
INTO TABLE customer
REPLACE
FIELDS TERMINATED BY ","
(
person_id,email_address,first_name,last_name,phone_number,address_id

)