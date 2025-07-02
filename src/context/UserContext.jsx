import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext(null);

// Initial dummy user data if localStorage is empty
const defaultUsers = [
  { email: 'user@example.com', password: 'password123', name: 'John Doe' },
  { email: 'admin@example.com', password: 'admin123', name: 'Admin User' },
];

export const UserProvider = ({ children }) => {
  // Initialize users from localStorage or use defaultUsers
  const [users, setUsers] = useState(() => {
    try {
      const storedUsers = localStorage.getItem('dummyUsers');
      return storedUsers ? JSON.parse(storedUsers) : defaultUsers;
    } catch (error) {
      console.error("Failed to load users from localStorage:", error);
      return defaultUsers;
    }
  });

  // Initialize login status and user name from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem('isLoggedIn') === 'true';
    } catch (error) {
      console.error("Failed to load isLoggedIn from localStorage:", error);
      return false;
    }
  });

  const [userName, setUserName] = useState(() => {
    try {
      return localStorage.getItem('userName') || '';
    } catch (error) {
      console.error("Failed to load userName from localStorage:", error);
      return '';
    }
  });

  // Effect to save users to localStorage whenever 'users' state changes
  useEffect(() => {
    try {
      localStorage.setItem('dummyUsers', JSON.stringify(users));
    } catch (error) {
      console.error("Failed to save users to localStorage:", error);
    }
  }, [users]);

  const loginUser = (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
      // Save login status to localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', user.name);
      return true; // Login successful
    }
    return false; // Login failed
  };

  const registerUser = (fullName, email, password) => {
    // Check if user already exists
    if (users.some(u => u.email === email)) {
      return false; // User already exists
    }
    const newUser = { email, password, name: fullName };
    setUsers(prevUsers => [...prevUsers, newUser]);
    // No need to save to localStorage here, useEffect handles it
    return true; // Registration successful
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    setUserName('');
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userName, loginUser, logoutUser, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};