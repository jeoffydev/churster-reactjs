import React from 'react'
import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent'
import LoginComponent from './components/LoginComponent'
import SecureComponent from './components/SecureComponent'
import CreateEventComponent from "./components/CreateEventComponent";
import {useIsAuthenticated } from 'react-auth-kit'
import { chursterLink } from './Helpers/routeHelper'
const RoutesComponent = () => {
    const isAuthenticated = useIsAuthenticated()

    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={chursterLink.contractor} element={<LoginComponent/>}/>
                {isAuthenticated() && <Route path={chursterLink.dashboard} element={
                    <RequireAuth loginPath={chursterLink.contractor}>
                        <SecureComponent/>
                    </RequireAuth>
                }/>}
                {isAuthenticated() && <Route path={'/create-event'} element={
                    <RequireAuth loginPath={chursterLink.contractor}>
                        <CreateEventComponent/>
                    </RequireAuth>
                }/>}
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent