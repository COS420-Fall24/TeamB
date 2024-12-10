// src/App.tsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import AuthPage from './components/AuthPage';
import LandingPage from './components/LandingPage';
import Variables from './components/Variables'; 
import DataTypes from './components/DataTypes';
import Loops from './components/Loops';
import './App.css'; // Import the CSS
import CoursePage from './components/CoursePage';
import InteractiveExercises from './components/InteractiveExercises';
import Quizzes from './components/Quizzes'; // Import the Quizzes component


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
    /**  
     ** UNUSED VARIABLE 'courseProgress' causing build errror
     **
     ** eslint automatically treats unused variables as errors
     ** remove below comment once 'courseProgress' is used
    **/

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [courseProgress, setCourseProgress] = useState<Record<number, number>>({});

    const updateCourseProgress = (courseId: number): void => {
        setCourseProgress((prev) => {
            const currentProgress = prev[courseId];
            if (currentProgress < 100) {
                const newProgress = Math.min(currentProgress + 20, 100);
                return { ...prev, [courseId]: newProgress };
            }
            return prev;
        });
    };

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={user ? <LandingPage onLogout={handleLogout} /> : <AuthPage onLogin={handleLogin} />}
                    
                />
                <Route path="/variables" element={<Variables />} /> 
                <Route path="/data-types" element={<DataTypes />} /> 
                <Route path="/loops" element={<Loops />} /> 
                <Route path="/quizzes" element={<Quizzes />} />
                <Route path="/interactive-exercises" element={<InteractiveExercises />} />
                <Route
                    path="/course/:courseId"
                    element={<CoursePage updateProgress={updateCourseProgress} />}
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
