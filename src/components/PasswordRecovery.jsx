import React, { useState } from 'react';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(`A password recovery email has been sent to ${email}`);
        // Simulate email sending
        localStorage.setItem('userEmail', email); // This is just for simulation
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-lg font-bold mb-4">Forgot Password</h2>
                {message && <p className="text-green-500">{message}</p>}
                
                <label className="block mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your registered email" className="mb-4 p-2 border rounded w-full" required />
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Submit</button>
                <p className="mt-4">
                    <a href="/" className="text-blue-500">Back to Login</a>
                </p>
            </form>
        </div>
    );
};

export default ForgotPassword;
