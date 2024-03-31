import { Outlet, Navigate } from 'react-router-dom'

export function Protected(){
    const token = sessionStorage.getItem('token');
    return (
        (token) ? <Outlet /> : <Navigate to="/signup" />
    )
}

export function Defended(){
    const token = sessionStorage.getItem('token');
    return (
        (!token) ? <Outlet /> : <Navigate to="/dashboard" />
    )
}