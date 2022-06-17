import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent";
import React from "react";
import CreateEventComponent from "../components/CreateEventComponent";



describe("Page Job Details", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.restoreAllMocks();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    const renderContainer = () => {

        return  render(
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
    };

    it("renders Login Component without an issue",   async() => {
        renderContainer();
        const signInBtn = screen.getByRole("login-btn");
        expect(signInBtn).toBeInTheDocument();

    });
});
