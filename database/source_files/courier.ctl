LOAD DATA
INFILE courier.csv
INTO TABLE courier
REPLACE
FIELDS TERMINATED BY ","
(
person_id,email_address,first_name,last_name,phone_number,starting_hour,average_delivery_time,number_of_deliveries


)