import React from 'react'
import { useState } from 'react';
import { useAuth } from '../common/global-service/auth';
import { useNavigate, useLocation } from 'react-router-dom';

export const Login = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true });
    }

    return (
        <div>
            <label>
                UserName:{''}
                <input type='text' onChange={(e) => setUser(e.target.value)}></input>
            </label>

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
