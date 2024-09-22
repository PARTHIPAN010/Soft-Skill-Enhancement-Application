import React, { useState, useEffect } from 'react';
import '../App.css'

const Login = () => {
    const [usernameEmail, setUsernameEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Check if user is already logged in
        const savedUser = localStorage.getItem('userName');
        if (savedUser) {
            alert('You are already logged in!'); // Example action
            window.location.href = '/dashboard'; // Redirect to dashboard
        }
    }, []);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Validation
        if (!usernameEmail || !password) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (usernameEmail && !validateEmail(usernameEmail)) {
            setErrorMessage('Please enter a valid email format.');
            return;
        }

        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        // Check against hardcoded credentials
        if (usernameEmail === 'user@gmail.com' && password === '987654321') {
            if (rememberMe) {
                // Save the username to local storage
                localStorage.setItem('userName', 'user');
            }
            alert('Login successful!'); // Example action
            window.location.href = '/dashboard'; // Redirect to dashboard
        } else {
            setErrorMessage('Invalid username/email or password. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-1/3">
                <h2 className="text-lg font-bold mb-4">Login</h2>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                
                <label className="block mb-2">Username or Email</label>
                <input
                    type="text"
                    placeholder="Enter your username or email"
                    value={usernameEmail}
                    onChange={(e) => setUsernameEmail(e.target.value)}
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
                
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="mr-2"
                    />
                    <label>Remember Me</label>
                </div>
                
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Login</button>
                <div className='flex gap-10 items-center justify-around mt-4'>
                <p>
                    <a href="/forgot-password" className="text-blue-500">Forgot Password?</a>
                </p>
                <p>
                    <a href="/signup" className="text-blue-500">Sign Up</a>
                </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
