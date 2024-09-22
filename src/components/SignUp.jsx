import React, { useState } from 'react';
import '../App.css'
const SignUp = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Validation
        if (!fullName || !email || !password || !confirmPassword) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email format.');
            return;
        }

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // Here you would typically save the user data to your database
        const newUser = { fullName, email, password };
        console.log('User registered:', newUser);
        setSuccessMessage('Registration successful! You can now log in.');

        // Clear fields after successful registration (optional)
        setFullName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');

        // Redirect to the login screen after a short delay (optional)
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSignUp} className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-lg font-bold mb-4">Sign Up</h2>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {successMessage && <p className="text-green-500">{successMessage}</p>}

                <label className="block mb-2">Full Name</label>
                <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />

                <label className="block mb-2">Email</label>
                <input
                    type="text"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />

                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />

                <label className="block mb-2">Confirm Password</label>
                <input
                    type="password"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mb-4 p-2 border rounded w-full"
                    required
                />

                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>

                <p className="mt-4">
                    <a href="/login" className="text-blue-500">Back to Login</a>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
