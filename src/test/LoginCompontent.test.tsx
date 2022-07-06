import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter  } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent"; 
import CreateEventComponent from "../components/CreateEventComponent";
import { QueryClientProvider, QueryClient } from 'react-query';

//Install chrome extension Testing Playground



describe("Login Component", () => {
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
                        <LoginComponent />
                        <CreateEventComponent/>
                    </BrowserRouter>
                </AuthProvider>
            </QueryClientProvider>
        );
    };

    it("renders Login Component without an issue",   async() => {
        renderContainer();

        const signInBtn = screen.getByRole('button', {
            name: /login/i
        });
        expect(signInBtn).toBeInTheDocument();
    });
});
