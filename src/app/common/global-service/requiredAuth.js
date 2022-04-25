import React from 'react'
import { useAuth } from './auth'
import { Navigate, useLocation } from 'react-router-dom';

export const RequiredAuth = ({ children }) => {
    const auth = useAuth();
    const loacation = useLocation();

    if (!auth.user) {
        return <Navigate to='/login' state={{ path: loacation.pathname }}></Navigate>
    }

    return children
}
