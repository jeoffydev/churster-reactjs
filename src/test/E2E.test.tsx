import { render, screen } from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent";
import React from "react";
import CreateEventComponent from "../components/CreateEventComponent";

test('renders Components non login and logged in', () => {
    render(
        <AuthProvider
            authName={"_authChurchToken"} authType={"cookie"}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >
            <BrowserRouter>
                <HomeComponent/>
                <LoginComponent />
                <CreateEventComponent/>
            </BrowserRouter>
        </AuthProvider>
    );
});