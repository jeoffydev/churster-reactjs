 
import './App.css';
import { AuthProvider } from 'react-auth-kit';
import RoutesComponent from './RoutesComponent'; 
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
        <AuthProvider
            authName={"_authChurchToken"} authType={"cookie"}
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >   
              
              <RoutesComponent/> 
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  );
}

export default App;
