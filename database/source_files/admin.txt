LOAD DATA
INFILE admin.csv
INTO TABLE admin
REPLACE
FIELDS TERMINATED BY ","
(
person_id,email_address,first_name,last_name,phone_number

)