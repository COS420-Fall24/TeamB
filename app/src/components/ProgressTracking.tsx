//generated with AI
import React from 'react';
import './ProgressTracking.css'; // Assuming styles are here

const ProgressTracking = (): JSX.Element => {
    const courses = [
        { id: 1, name: 'Variables', progress: 50 },
        { id: 2, name: 'Data Types', progress: 75 },
        { id: 3, name: 'Loops', progress: 20 },
        { id: 4, name: 'Functions', progress: 90 },
    ];

    return (
        <div className="progress-tracking">
            <h2>Progress Tracking</h2>
            <p>Track your progress through your courses below:</p>
            <ul>
                {courses.map((course) => (
                    <li key={course.id} className="progress-item">
                        <h3>{course.name}</h3>
                        <div className="progress-bar-container">
                            {/* Add the role="progressbar" to the progress bar */}
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={course.progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: `${course.progress}%` }}
                            />
                        </div>
                        <p>{course.progress}% Completed</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProgressTracking;
