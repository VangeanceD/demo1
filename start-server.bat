@echo off
REM Start a simple HTTP server using a different approach
cd /d "%~dp0"
echo Starting ICSE Java Library Server...
echo.
echo ============================================
echo 🚀 Open your browser and go to:
echo http://localhost:8000
echo ============================================
echo.
echo Press Ctrl+C to stop the server
echo.

REM Use Ruby if available, otherwise try other methods
where ruby >nul 2>nul
if %errorlevel% equ 0 (
    echo Using Ruby server...
    ruby -run -ehttpd . -p8000
    exit /b
)

REM Try PHP if available
where php >nul 2>nul
if %errorlevel% equ 0 (
    echo Using PHP server...
    php -S localhost:8000
    exit /b
)

REM Fallback: Display instructions
echo.
echo ⚠️  No server runtime found on your system.
echo Please install one of the following:
echo - Node.js (https://nodejs.org)
echo - Python (https://python.org)
echo - PHP (https://php.net)
echo - Ruby (https://ruby-lang.org)
echo.
echo Or simply open index.html directly in your browser.
pause
