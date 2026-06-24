@echo off
cd /d "%~dp0"
echo Starting Yomic Website locally...
npm run docs:dev
pause
