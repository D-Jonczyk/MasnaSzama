LOAD DATA
INFILE address.csv
INTO TABLE address
REPLACE
FIELDS TERMINATED BY ","
(
address_id,city,number,street

)