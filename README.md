Tour History Website
Welcome to the Tour History Website! This web application allows users to track and manage their tour history. Users can log in using their Google account, add details about their past tours, and view their tour history.

Table of Contents
Features
Technologies Used
Getting Started
Prerequisites
Installation
Configuration
Environment Variables
Usage
Folder Structure
Authentication
Redux Toolkit
Database
Contributing
License
Features
User authentication with Google
Add, edit, and delete tour entries
View a list of all tour entries
Interactive and responsive user interface
State management with Redux Toolkit
Technologies Used
ReactJS
NodeJS
ExpressJS
MongoDB
Google Authentication
Redux Toolkit
Getting Started
Prerequisites
Before you begin, ensure you have the following installed:

Node.js
MongoDB
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/tour-history-website.git
cd tour-history-website
Install dependencies:
bash
Copy code
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Configuration
Environment Variables
Create a .env file in the server directory and add the following variables:

env
Copy code
PORT=3001
MONGODB_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SESSION_SECRET=your-session-secret
Replace your-mongodb-uri, your-google-client-id, your-google-client-secret, and your-session-secret with your MongoDB connection URI, Google OAuth client ID, Google OAuth client secret, and a session secret, respectively.

Usage
Start the server:
bash
Copy code
cd server
npm start
Start the client:
bash
Copy code
cd client
npm start
Visit http://localhost:3000 in your web browser to access the application.

Folder Structure
lua
Copy code
tour-history-website/
|-- client/
|   |-- public/
|   |-- src/
|   |   |-- actions/
|   |   |-- components/
|   |   |-- reducers/
|   |   |-- App.js
|   |   |-- index.js
|   |   |-- ...
|   |-- package.json
|-- server/
|   |-- config/
|   |-- controllers/
|   |-- routes/
|   |-- app.js
|   |-- server.js
|   |-- ...
|   |-- package.json
|-- .env
|-- README.md
Authentication
This project uses Google Authentication for user authentication. Make sure to set up your project on the Google Developer Console and obtain the client ID and client secret.

Redux Toolkit
State management is handled using Redux Toolkit. Actions and reducers are organized in the actions and reducers folders inside the src directory.

Database
The application uses MongoDB as its database. Ensure you have a running MongoDB instance and update the MONGODB_URI in the .env file accordingly.

Contributing
Feel free to contribute to the project by opening issues or submitting pull requests.
