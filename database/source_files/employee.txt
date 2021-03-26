LOAD DATA
INFILE employee.csv
INTO TABLE employee
REPLACE
FIELDS TERMINATED BY ","
(
	person_id,email_address,first_name,last_name,phone_number


)