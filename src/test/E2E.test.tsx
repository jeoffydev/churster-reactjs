import { render, screen } from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent"; 
import CreateEventComponent from "../components/CreateEventComponent";
import SecureComponent from "../components/SecureComponent";

test('renders Components of non login and logged in', () => {
    render(
        <AuthProvider
            authName={"_authChurchToken"} authType={"cookie"}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >
            <BrowserRouter>
                <HomeComponent/>
                <LoginComponent />
                <SecureComponent />
                <CreateEventComponent/>
            </BrowserRouter>
        </AuthProvider>
    );
});