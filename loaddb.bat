@echo off
setlocal enableDelayedExpansion 

if not exist logs mkdir 

set MYDIR=%cd%\database\1_base_tables

@echo Loading base tables data.
for /F %%x in ('dir /B/D %MYDIR%') do (
  set filename=%MYDIR%\%%x
  
  REM replace every '\' with '\\' so the path in query is correct
	FOR %%f IN (!filename!) DO (
	    set "f=%%f"
		set "f=!f:\=\\!"
	)
	
  set tablename=%%x
  set tablename=!tablename:.csv=!
  @echo Inserting into !tablename!... >> logs\!tablename!.log
  mysqlsh mysql://masnaszamauser@localhost:3306/masnaszama?local-infile=1 --sql^
	--execute="LOAD DATA LOCAL INFILE '!f!' INTO TABLE !tablename! FIELDS TERMINATED BY ',' IGNORE 1 LINES; SHOW WARNINGS" >> logs\!tablename!.log
)

set MYDIR=%cd%\database\2_referenced_tables

@echo Loading referenced tables data.
for /F %%x in ('dir /B/D %MYDIR%') do (
  set filename=%MYDIR%\%%x
  
  REM replace every '\' with '\\' so the path in query is correct
	FOR %%f IN (!filename!) DO (
	    set "f=%%f"
		set "f=!f:\=\\!"
	)
	
  set tablename=%%x
  set tablename=!tablename:.csv=!
  @echo Inserting into !tablename!... >> logs\!tablename!.log
  mysqlsh mysql://masnaszamauser@localhost:3306/masnaszama?local-infile=1 --sql^
	--execute="LOAD DATA LOCAL INFILE '!f!' INTO TABLE !tablename! FIELDS TERMINATED BY ',' IGNORE 1 LINES; SHOW WARNINGS" >> logs\!tablename!.log
)

set MYDIR=%cd%\database\3_join_tables

@echo Loading join tables data.
for /F %%x in ('dir /B/D %MYDIR%') do (
  set filename=%MYDIR%\%%x
  
  REM replace every '\' with '\\' so the path in query is correct
	FOR %%f IN (!filename!) DO (
	    set "f=%%f"
		set "f=!f:\=\\!"
	)
	
  set tablename=%%x
  set tablename=!tablename:.csv=!
  @echo Inserting into !tablename!... >> logs\!tablename!.log
  mysqlsh mysql://masnaszamauser@localhost:3306/masnaszama?local-infile=1 --sql^
	--execute="LOAD DATA LOCAL INFILE '!f!' INTO TABLE !tablename! FIELDS TERMINATED BY ',' IGNORE 1 LINES; SHOW WARNINGS" >> logs\!tablename!.log
)

pause