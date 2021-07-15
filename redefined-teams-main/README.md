# TEAMS-REDEFINED(ENGAGE'21)

## INSTALLATION

Install Redis.io, create your redis account.

Create a firebase project, cr.

## SETUP STEPS

### The .env file
- Start redis server "redis-server"
- Create a .env file and write :
 1. PORT = 4000 (for the backend part)
 2. List them all: 
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,

### Backend
- cd redefined-teams-main
- npm i
- node idx.js

### In teamsclone_main folder(React app)
- cd redefined-teams-main
- cd teamsclone_main
- npm i
- npm start