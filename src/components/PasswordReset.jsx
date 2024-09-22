import React, { useState } from 'react';
import '../App.css'
const PasswordReset = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleReset = () => {
        // Add password reset logic here
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-lg font-bold mb-4">Reset Password</h2>
                <input
                    type="password"
                    placeholder="Enter your new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <input
                    type="password"
                    placeholder="Re-enter your new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />
                <button onClick={handleReset} className="bg-blue-500 text-white p-2 rounded w-full">Reset Password</button>
            </form>
        </div>
    );
};

export default PasswordReset;
