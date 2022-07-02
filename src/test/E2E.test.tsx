import { render  } from '@testing-library/react';
import LoginComponent from "../components/LoginComponent";
import { AuthProvider } from 'react-auth-kit';
import { BrowserRouter  } from 'react-router-dom'
import HomeComponent from "../components/HomeComponent"; 
import CreateEventComponent from "../components/CreateEventComponent";
import SecureComponent from "../components/SecureComponent";
import { QueryClientProvider, QueryClient } from 'react-query';

test('renders Components of non login and logged in', () => {
    
    const queryClient = new QueryClient();

    render(
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
    );
});