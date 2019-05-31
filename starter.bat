@echo off

cd server
cd backend
start cmd.exe /k "npm start"

cd ..
cd ..

cd front-end
cd flow
start cmd.exe /k "npm start"

cd ..

cd dashboard
start cmd.exe /k "npm start"

pause