import React, { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem('token'));
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      try {
        const decoded = jwtDecode(storedToken);
        setUserName(decoded.name || '');
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Invalid token:", error);
        // Clear invalid token
        localStorage.removeItem('token');
        setIsLoggedIn(false);
      }
    }
  }, []);

  const loginUser = async (email, password) => {
    const response = await fetch('http://localhost:3000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const { token } = await response.json();
    localStorage.setItem('token', token);
    console.log("UserContext - Token received and set:", token);
    const decoded = jwtDecode(token);
    setUserName(decoded.name);
    setIsLoggedIn(true);
  };

  const registerUser = async (userData) => {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return await response.json();
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUserName('');
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userName, loginUser, logoutUser, registerUser, token }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
