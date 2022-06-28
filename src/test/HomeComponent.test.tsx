import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent";
import React from "react";
import CreateEventComponent from "../components/CreateEventComponent";



describe("Home Component", () => {
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
                    <CreateEventComponent/>
                </BrowserRouter>
            </AuthProvider>
        );
    };

    it("renders Home Component without an issue",   async() => {
        renderContainer();
        const usernamePlaceHolder = screen.getByPlaceholderText(/Username/i);
        expect(usernamePlaceHolder).toBeInTheDocument();

        const passwordPlaceHolder = screen.getByPlaceholderText(/Password/i);
        expect(passwordPlaceHolder).toBeInTheDocument();

        const button = screen.getAllByRole("button");
        expect(button).toBeTruthy();

    });
});
