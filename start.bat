@echo off
title LinkTree - Start
setlocal EnableExtensions

rem ============================================================
rem  LinkTree local server launcher
rem  Starts a static HTTP server and opens your browser.
rem  DO NOT open index.html by double-clicking it - the page
rem  uses ES modules and only works over HTTP (localhost).
rem ============================================================

rem --- Go to the folder this .bat lives in ----------------------
cd /d "%~dp0"

rem --- Port to use ----------------------------------------------
rem If 8010 is busy, change this to any free number (e.g. 8080,
rem 3000, 5000) and update the URL below the same way.
set "PORT=8010"

rem --- Start the server in its own window -----------------------
rem python must be on your PATH. If it is not, install Python
rem from https://www.python.org and tick "Add to PATH".
start "LinkTree Server" /min cmd /k "python -m http.server %PORT%"

rem --- Give the server a moment to boot -------------------------
timeout /t 2 /nobreak >nul

rem --- Open the app in your default browser ---------------------
start "" "http://localhost:%PORT%/"
echo.
echo LinkTree is running at:  http://localhost:%PORT%/
echo Leave the "LinkTree Server" window open.
echo Press any key to close this window (the server keeps running).
echo.
pause >nul
endlocal
