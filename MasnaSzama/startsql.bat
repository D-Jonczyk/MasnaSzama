@echo off

REM elevate to admin
set "params=%*"
cd /d "%~dp0" && ( if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs" ) && fsutil dirty query %systemdrive% 1>nul 2>nul || (  echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "cmd.exe", "/k cd ""%~sdp0"" && %~s0 %params%", "", "runas", 1 >> "%temp%\getadmin.vbs" && "%temp%\getadmin.vbs" && exit /B )

for /F "tokens=3 delims=: " %%H in ('sc query "MySQL80" ^| findstr "        STATE"') do (
  IF /I "%%H" NEQ "RUNNING" (
   @echo MySQL80 service is not running, starting now...
   net start "MySQL80"
  ) ELSE (
   @echo MySQL80 is up and running, proceeding...
  )
)
exit