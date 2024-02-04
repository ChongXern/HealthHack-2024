# HealthHack 2024: DocTalk

## Description

A web forum designed to facilitate communication between regular non-medical students and medical students. Non-medical students can post a medical question and medical student users can reply to the posts to the best of their abilities. Of course, these medical questions should only be answered if minor and will be verified by a practicing doctor, closing the discussion. If the medical question is serious or life-threatening, the user will be directed to the nearest clinic or hospital. 

## Setup

Ensure you have Node.js installed.

## Installation

1. Clone the repository: CLI: 'git clone https://github.com/ChongXern/HealthHack-2024.git'
2. Navigate to the project directory: CLI: 'cd healthhack-2024'
3. Install dependencies: CLI: 'npm install'

## Usage

1. Start the server: 'npm start'
2. Open your browser and go to [http://localhost:3000](http://localhost:3000) or the specified port in your 'server.js' file.

## Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt): Password hashing library.
- [cors](https://www.npmjs.com/package/cors): Middleware for handling Cross-Origin Resource Sharing.
- [ejs](https://www.npmjs.com/package/ejs): Template engine for rendering HTML.
- [express](https://www.npmjs.com/package/express): Web application framework for Node.js.
- [mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool.
- [morgan](https://www.npmjs.com/package/morgan): HTTP request logger middleware.

## Scripts

- 'npm start': Start the server using 'node server.js'.
- 'npm test': Placeholder for tests.