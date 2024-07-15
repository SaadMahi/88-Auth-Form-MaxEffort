# <div align='center'> [The Max Effort💪](https://maxeffort-admin.vercel.app/) </div>

![max-effort-auth-form](https://github.com/user-attachments/assets/f7e72754-f397-424a-bed4-6044809d84a7)

# Project Documentation

## Overview
This project is a React application structured with multiple components, context providers, and routes to handle user authentication and page navigation. The primary focus is on managing user sessions and providing a seamless user experience with protected routes and a login form.

## Entry Point
The entry point of the application sets up the root component and wraps it with various providers and configurations.

### Key Functionalities
- **React.StrictMode**: Helps identify potential problems in the application.
- **AuthContextProvider**: Provides authentication context to the entire app.
- **UserDataContextProvider**: Provides user data context to the entire app.
- **BrowserRouter**: Enables routing in the application.
- **Toaster**: Displays toast notifications.

## App Component
The App component defines the routes and their respective components. It uses context to manage user authentication and navigation.

### Key Functionalities
- **Routes**: Defines the navigation paths in the application.
- **RequireAuth**: Higher-order component to protect routes that require authentication.
- **Navigate**: Redirects users based on authentication status.
- **Context**: Utilizes AuthContext to manage and access current user information.

## Form Component
The Form component handles the login functionality, including form validation, authentication, and session management.

### Key Functionalities
- **useRef**: Manages the "Remember Me" checkbox state.
- **useContext**: Accesses AuthContext and UserDataContext for dispatching actions.
- **useNavigate**: Navigates to different routes post-login.
- **useForm**: Handles form validation and submission.
- **useState**: Manages loading state.
- **login**: API call for user authentication.
- **toast**: Displays success and error messages.

### Form Elements
- **Header**: Displays the form title.
- **Input**: Custom input component with validation.
- **Error**: Displays validation errors.
- **RememberCheck**: Checkbox for the "Remember Me" functionality.
- **Button**: Submit button.
- **Footer**: Footer component of the form.

## Conclusion
This project demonstrates a robust approach to user authentication and session management using React. It leverages context providers for state management, custom hooks for form handling, and React Router for navigation. The integration of toast notifications and loading.
