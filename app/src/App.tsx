// src/App.tsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import AuthPage from './components/AuthPage';
import LandingPage from './components/LandingPage';
import Variables from './components/Variables'; // Import your Variables component
import DataTypes from './components/DataTypes'; // Import the DataTypes component
import Loops from './components/Loops';
import Quizzes from './components/Quizzes'; // Import the Quizzes component
import './App.css'; // Import the CSS

const auth = getAuth();

const App = (): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = () => setUser(auth.currentUser);
    const handleLogout = () => {
        auth.signOut();
        setUser(null);
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <LandingPage onLogout={handleLogout} /> : <AuthPage onLogin={handleLogin} />}
                />
                <Route path="/variables" element={<Variables />} /> {/* Route for Variables page */}
                <Route path="/data-types" element={<DataTypes />} /> {/* Route for DataTypes page */}
                <Route path="/loops" element={<Loops />} /> {/* Route for Loops page */}
                <Route path="/quizzes" element={<Quizzes />} /> {/* New route for Quizzes page */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
