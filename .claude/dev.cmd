@echo off
rem Dev-server launcher for machines without a system Node install.
rem Expects a portable Node at %LOCALAPPDATA%\claude-node.
set "PATH=%LOCALAPPDATA%\claude-node\node-v24.18.0-win-x64;%PATH%"
where node >nul 2>nul || (echo Portable Node not found at %LOCALAPPDATA%\claude-node & exit /b 1)
call npm run dev
