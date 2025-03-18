# logfile

# User Activity Tracker with GDPR Consent

This project implements a user activity tracking system with GDPR consent functionality. It collects user interaction data (form submissions, clicks, scroll depth) after obtaining explicit user consent.

## Features

- GDPR compliant consent banner
- User activity tracking:
  - Form submissions
  - Click tracking
  - Scroll depth monitoring
- Data storage in log files
- Configurable tracking settings
- Consent management with local storage

## Installation

1. Install dependencies:
```bash
npm init -y
npm install express
```

2. Project structure:
project/
├── index.html
├── server.js
├── user_data.log
└── README.md

## Running the Project

1. Start the server:
```bash
node server.js
```

2. Open http://localhost:3000 in your browser

3. The consent banner will appear on first visit
   - Click "Yes" to allow tracking
   - Click "No" to deny tracking

4. When consent is granted:
   - User activity data is collected
   - Data is saved to user_data.log every 60 seconds
   - You can view collected data in user_data.log file

## Configuration

Server configuration is in `server.js`:
- Port: 3000
- Log file: user_data.log

Frontend configuration is in `index.html`:
- Consent expiration: 30 days
- Tracking intervals: 60 seconds
- Server URL: http://localhost:3000/save-data

## Data Collection

The system collects:
- Timestamp
- Current URL
- Referrer
- User Agent
- Screen resolution
- Form interactions
- Click events
- Scroll depth

## License

MIT
