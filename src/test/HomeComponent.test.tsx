import {  render, screen } from '@testing-library/react'; 
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter  } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent"; 
import CreateEventTeaserComponent from '../components/CreateEventTeaserComponent';
import { QueryClientProvider, QueryClient } from 'react-query';


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
        const queryClient = new QueryClient();
        return  render(
            <QueryClientProvider client={queryClient}>
                <AuthProvider
                    authName={"_authChurchToken"} authType={"cookie"}
                    cookieDomain={window.location.hostname}
                    cookieSecure={window.location.protocol === "https:"}
                >
                    <BrowserRouter>
                        <HomeComponent/> 
                        <CreateEventTeaserComponent />
                    </BrowserRouter>
                </AuthProvider>
            </QueryClientProvider>
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
