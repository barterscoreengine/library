@echo off
setlocal enabledelayedexpansion

:: ============================================================================
:: BarterScore Engine - Offline Windows Launcher
:: License: Apache-2.0
:: Compatible with: Windows 7, Windows 8/8.1, Windows 10, Windows 11
:: ============================================================================

title BarterScore Engine - Offline Launcher

set "SCRIPT_DIR=%~dp0"
set "TARGET_FILE=%SCRIPT_DIR%manual_generator.html"

echo ============================================================================
echo  BarterScore Engine - Offline Manual Generator Launcher
echo ============================================================================
echo.

if not exist "%TARGET_FILE%" (
    echo [ERROR] File not found: "%TARGET_FILE%"
    echo Please verify that manual_generator.html exists in the root directory:
    echo %SCRIPT_DIR%
    echo.
    pause
    exit /b 1
)

echo [INFO] Launching offline interface via local file:// protocol...
echo [PATH] "%TARGET_FILE%"
echo.

start "" "%TARGET_FILE%"

if %ERRORLEVEL% neq 0 (
    echo [WARNING] Default file association failed. Attempting explorer fallback...
    explorer.exe "%TARGET_FILE%"
)

echo [OK] BarterScore Engine opened in your default web browser.
exit /b 0
