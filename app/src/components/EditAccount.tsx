// src/components/EditAccount.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './EditAccount.css';

const EditAccount = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    // Adding state for account name, username, email, and password
    const [accountName, setAccountName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle back navigation
    const handleBack = () => {
        navigate('/'); // Navigate back to the landing page or the previous page
    };

    // Function to handle form submission (example)
    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Your save logic here (update user info, etc.)
    };

    return (
        <div className="edit-account-container">
            <button onClick={handleBack} className="back-button"> &lt; </button>

            <h2>Edit Account</h2>
            <form onSubmit={handleSave}>
                {/* Account Name Input */}
                <div className="form-group">
                    <label>Account Name:</label>
                    <input
                        type="text"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        placeholder="Enter your account name"
                    />
                </div>

                {/* Email Input */}
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter new email"
                    />
                </div>

                {/* Password Input */}
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter new password"
                    />
                </div>

                <button type="submit" className="save-button">Save Changes</button>
            </form>
        </div>
    );
};

export default EditAccount;