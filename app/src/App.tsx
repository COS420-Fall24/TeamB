import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import AuthPage from './components/AuthPage';
import LandingPage from './components/LandingPage';
import Variables from './components/Variables'; // Import your Variables component
import DataTypes from './components/DataTypes'; // Import the DataTypes component
import Loops from './components/Loops'; // Import the Loops component
import Quizzes from './components/Quizzes'; // Import the Quizzes component
import ProgressTracking from './components/ProgressTracking'; // Import the ProgressTracking component
import './App.css'; // Import the CSS

const auth = getAuth();

const App = (): JSX.Element => {
    const [user, setUser] = useState<User | null>(null);

    // Check authentication state on app load
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    // Handle login state
    const handleLogin = () => setUser(auth.currentUser);
    
    // Handle logout
    const handleLogout = () => {
        auth.signOut();
        setUser(null);
    };

    return (
        <Router>
            <Routes>
                {/* Route for the landing page or auth page depending on user state */}
                <Route
                    path="/"
                    element={user ? <LandingPage onLogout={handleLogout} /> : <AuthPage onLogin={handleLogin} />}
                />
                {/* Individual routes for each page */}
                <Route path="/variables" element={<Variables />} /> {/* Route for Variables page */}
                <Route path="/data-types" element={<DataTypes />} /> {/* Route for DataTypes page */}
                <Route path="/loops" element={<Loops />} /> {/* Route for Loops page */}
                <Route path="/quizzes" element={<Quizzes />} /> {/* Route for Quizzes page */}
                <Route path="/progress" element={<ProgressTracking />} /> {/* New route for ProgressTracking page */}
                {/* Fallback route to redirect any unknown paths to the homepage */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
