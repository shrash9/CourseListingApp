# Course Listing Application

This is a course listing application built with Angular. It allows users to view a list of courses, search and filter them, and view detailed information about each course. The app also includes a simple authentication flow with a logout functionality. The backend is powered by a Node.js server that serves the course listings.

## Technologies Used

- **Angular 19**: The main framework used to build this application.
- **TypeScript**: The programming language used.
- **Bootstrap 5**: Used for responsive design and UI components.
- **RxJS**: For handling asynchronous operations such as HTTP requests.
- **Node.js**: The backend server used to serve course data.
- **Express.js**: A web framework for Node.js to create the API.
- **HTML & CSS**: Standard web technologies for structuring and styling the application.


## Features

- **Course Listing**: Displays a list of available courses.
- **Search and Filter**: Users can search for courses by title.
- **Load More**: Users can load additional courses with a button.
- **Course Details**: Navigate to a course's detail page for more information.
- **Logout**: A simple logout functionality that clears session data and redirects to the login page.


## Prerequisites

To run this application locally, you need the following tools:

- **Node.js**: A JavaScript runtime to run the app and install dependencies. Download it from the official [Node.js website](https://nodejs.org/).
- **npm (Node Package Manager)**: To install the necessary dependencies for both the frontend (Angular) and the backend (Node.js).
- **MongoDB** (if using MongoDB as the database): Make sure you have MongoDB installed or have access to a MongoDB server.

## Installation

### 1. **Clone the repository**:

```bash
git clone https://github.com/yourusername/course-listing-app.git
```

### 2. **Install frontend dependencies (Angular)**:

Navigate to the frontend folder and install dependencies:

```bash
cd course-listing-app/frontend
npm install
```

### 3. **Install backend dependencies (Node.js)**:

Navigate to the backend folder (or wherever your `server.js` file is) and install dependencies:

```bash
cd course-listing-app/backend
npm install
```

### 4. **Set up environment variables**:

Make sure the `apiUrl` in `src/environments/environment.ts` matches the URL where your backend server will be running.

For example, if the backend runs locally on port `3000`, you should have:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/courses'
};
```

### 5. **Run the Node.js server**:

Navigate to the `backend` folder (or the folder where `server.js` is located) and run:

```bash
node server.js
```

This will start the backend server, which serves the course listings API.

### 6. **Run the Angular application**:

Now, in the `frontend` folder, start the Angular development server:

```bash
cd ../frontend
npm start
```

The frontend application will be available at `http://localhost:4200`, and it will make requests to the backend at `http://localhost:3000`.

## Usage

1. **Run the backend server**:

   Navigate to the `backend` folder and run:

   ```bash
   node server.js
   ```

   This will start the Node.js server which provides the course data.

2. **Run the Angular application**:

   Navigate to the `frontend` folder and run:

   ```bash
   npm start
   ```

   This will start the Angular app and you can access it in your browser at `http://localhost:4200`.

3. **Browse the application**:

   - Navigate through the Dashboard to view the list of courses.
   - Use the search bar to filter courses by title.
   - Click on "View Details" to see more information about a course.
   - Click the "Log Out" button to log out from the application.

## Development

To contribute to this project or to make changes locally, follow these steps:

1. **Make sure all dependencies are installed**:

   - For the frontend:

     ```bash
     cd frontend
     npm install
     ```

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

2. **Run the application in development mode**:

   - Start the backend:

     ```bash
     cd backend
     node server.js
     ```

   - Start the frontend:

     ```bash
     cd frontend
     npm start
     ```

3. **To build the application**:

   For the frontend, to create a production-ready build:

   ```bash
   cd frontend
   npm run build
   ```

4. **To run tests**:

   To ensure your code works correctly, run:

   ```bash
   cd frontend
   npm test
   ```

### Acknowledgements

- The project was inspired by various course listing apps and aims to provide a simple yet effective learning management system UI.
