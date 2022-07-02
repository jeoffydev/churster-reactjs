import {useEffect} from 'react'
import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeComponent from './components/HomeComponent' 
import SecureComponent from './components/SecureComponent'
import CreateEventComponent from "./components/CreateEventComponent";
import {useIsAuthenticated, useAuthHeader } from 'react-auth-kit'
import { chursterLink } from './Helpers/routeHelper'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import FooterComponent from './components/GeneralComponent/FooterComponent'
import {styled} from "@mui/system"; 
import AuthenticatedTopNavigationComponent from './components/NavigationComponent/AuthenticatedTopNavigationComponent';
import axios from "axios";

const  PageWrapper  = styled(`div`)(() => ({ 
     display:'flex',
     flexDirection:'column',  
     flexWrap: 'nowrap',
     minHeight: '100%',
     justifyContent: 'space-between',
     alignItems: 'stretch',
     alignContent: 'stretch',
      
}));


const RoutesComponent = () => {
    const isAuthenticated = useIsAuthenticated() 
    const authHeader = useAuthHeader(); 
    
    //Get the jwt in global ways
    useEffect(()=>{
        if(authHeader()){
          console.count("GLOBAL JWT")
          axios.defaults.headers.common['Authorization'] = authHeader();
        }
    },[axios, authHeader])

    return ( 
        <BrowserRouter>
            <PageWrapper>
                {!isAuthenticated() ? <NavigationComponent /> : <AuthenticatedTopNavigationComponent />}
                <Routes>
                    {!isAuthenticated() && <Route path={chursterLink.home} element={<HomeComponent/>}/>}
                    <Route path={chursterLink.about} element={<p>About Us</p>}/>
                    <Route path={chursterLink.contact} element={<p>Contact Us</p>}/> 
                    
                    {isAuthenticated() && <Route path={chursterLink.home} element={
                        <RequireAuth loginPath={chursterLink.contractor}>
                            <SecureComponent/>
                        </RequireAuth>
                    }/>}

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
                <FooterComponent />
            </PageWrapper>
        </BrowserRouter>
    )
}

export default RoutesComponent