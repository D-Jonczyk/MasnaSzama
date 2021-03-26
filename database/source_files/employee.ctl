LOAD DATA
INFILE employee.csv
INTO TABLE Chief
REPLACE
FIELDS TERMINATED BY ","
(
EmployeeId (FK),hiredDate,firedDate,hoursOfWork

)