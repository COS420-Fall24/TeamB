// src/components/ProgressTracking.tsx
// generated with AI

import React, { useState } from 'react';

const ProgressTracking: React.FC = () => {
    const [progressData, setProgressData] = useState([
        { course: 'Variables', progress: 50 },
        { course: 'Data Types', progress: 75 },
        { course: 'Loops', progress: 20 },
        { course: 'Functions', progress: 90 },
    ]);

    return (
        <div className="progress-tracking">
            <h2>Progress Tracking</h2>
            <p>Track your progress through your courses below:</p>
            <ul>
                {progressData.map((item, index) => (
                    <li key={index} className="progress-item">
                        <h3>{item.course}</h3>
                        <div className="progress-bar-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${item.progress}%` }}
                            ></div>
                        </div>
                        <p>{item.progress}% Completed</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressTracking;
