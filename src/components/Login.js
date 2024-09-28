import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('STUDENT');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/login', {
                username,
                password,
                role
            });
            console.log('Login successful', response.data);
        } catch (error) {
            console.error('Error logging in', error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="STUDENT">Student</option>
                    <option value="FACULTY_MEMBER">Faculty Member</option>
                    <option value="ADMINISTRATOR">Administrator</option>
                </select>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
