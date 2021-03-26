LOAD DATA
INFILE user_account.csv
INTO TABLE user_account
REPLACE
FIELDS TERMINATED BY ","
(
	person_id,email_address,first_name,last_name,phone_number,last_login,password,registered_date,user_name
)