LOAD DATA
INFILE schedule.csv
INTO TABLE schedule
REPLACE
FIELDS TERMINATED BY ","
(
	schedule_id,date_created,end_time,other_details,start_time,person_id


)