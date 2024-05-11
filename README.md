# My SImple E-Commerce App

Welcome to my e-commerce application! 
This README provides detailed instructions on setting up and running the application, including any necessary API keys or configuration details.

## Overview

This e-commerce application allows users to browse and purchase products. It includes features such as user authentication, adding/removing products from the cart, and a checkout process.

### Architectural Choices

- **Frontend**: The frontend is built using React and Material-UI for the UI components. Redux is used for state management, allowing for a centralized store to manage user authentication and cart data.
- **Authentication**: User authentication is handled using Firebase Authentication, allowing users to sign up and login securely.
- **Styling**: Material-UI is used for styling components, providing a clean and consistent UI design.
- **State Management**: Redux is used for managing application state, allowing for predictable and scalable state management.

### Core Requirements Approach

- **User Authentication**: Implemented user authentication using Firebase Authentication. Users can sign up and log in securely.
- **Shopping Cart**: Implemented a shopping cart feature using Redux to manage cart state. Users can add/remove products from the cart.
- **Checkout Process**: The checkout process is simulated, allowing users to review their cart and proceed to checkout. 

### Challenges Faced

- **Firebase Integration**: Integrating Firebase services such as Authentication and Realtime Database posed initial challenges due to the setup process and API configuration.
- **State Management**: Managing application state using Redux required careful planning and consideration of the data flow to ensure consistent behavior across components.
- **Checkout based on logged in user**

## Setup Instructions

Follow these steps to set up and run the application:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/ejmichael/little-fish.git


Navigate to the project directory:
bash
Copy code
cd your-repo
### Install dependencies:
npm install

Create a Firebase project and obtain your Firebase configuration details.

Create a .env file in the project root and add your Firebase configuration:
plaintext
Copy code
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
Run the application:
bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000 to view the application.
