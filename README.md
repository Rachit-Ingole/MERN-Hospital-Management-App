# Patient List and Data Management Website

## Overview
This project is a simple web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It serves as a basic patient list and data management system with CRUD (Create, Read, Update, Delete) functionalities. The primary goal of this project was to develop my skills in full-stack web development and understand the core concepts of the MERN stack.

## Features
- **Patient List**: View a list of all patients.
- **Add Patient**: Add a new patient's data.
- **Update Patient**: Update existing patient information.
- **Delete Patient**: Remove a patient's record.
- **Search Patient**: Search for a patient by name or ID.

## Technologies Used
- **MongoDB**: Database to store patient information.
- **Express.js**: Backend framework to handle routing and API requests.
- **React.js**: Frontend library to build the user interface.
- **Node.js**: Runtime environment to execute server-side code.

## Setup and Installation
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/patient-list.git
    ```
2. **Install Dependencies**:
    Navigate to the root directory and install server-side dependencies:
    ```sh
    npm install
    ```
    Then, navigate to the `client` directory and install client-side dependencies:
    ```sh
    cd client
    npm install
    ```
3. **Set Up Environment Variables**:
    Create a `.env` file in the root directory and add your MongoDB connection string:
    ```sh
    MONGODB_URI=your_mongodb_uri
    ```
4. **Run the Application**:
    Start the server:
    ```sh
    npm start
    ```
    Start the client:
    ```sh
    cd client
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:3000` to access the application.
- Use the navigation menu to add, update, delete, and search for patient records.

## File Structure
