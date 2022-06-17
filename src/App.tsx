import React from 'react';
import './App.css';
import { AuthProvider } from 'react-auth-kit';
import RoutesComponent from './RoutesComponent';

function App() {
  return (
      <AuthProvider
          authName={"_auth"} authType={"cookie"}
          cookieDomain={window.location.hostname}
          cookieSecure={window.location.protocol === "https:"}
      >
          <RoutesComponent/>
      </AuthProvider>
  );
}

export default App;
