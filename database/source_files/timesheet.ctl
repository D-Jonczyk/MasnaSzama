LOAD DATA
INFILE timesheet.csv
INTO TABLE timesheet
REPLACE
FIELDS TERMINATED BY ","
(
	timesheet_id,end_time,notes,start_time

)