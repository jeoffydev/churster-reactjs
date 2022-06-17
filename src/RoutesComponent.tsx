import React from 'react'
import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import SecureComponent from './components/SecureComponent'
import CreateEventComponent from "./components/CreateEventComponent";
import {useIsAuthenticated } from 'react-auth-kit'
const RoutesComponent = () => {
    const isAuthenticated = useIsAuthenticated()

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/login' } element={<LoginComponent/>}/>
                {isAuthenticated() && <Route path={'/dashboard'} element={
                    <RequireAuth loginPath={'/login'}>
                        <SecureComponent/>
                    </RequireAuth>
                }/>}
                {isAuthenticated() && <Route path={'/create-event'} element={
                    <RequireAuth loginPath={'/login'}>
                        <CreateEventComponent/>
                    </RequireAuth>
                }/>}
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent