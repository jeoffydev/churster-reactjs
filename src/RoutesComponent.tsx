import {useEffect, useState} from 'react'
import { RequireAuth } from 'react-auth-kit'
import { BrowserRouter, Route, Routes,  Navigate } from 'react-router-dom'
import HomeComponent from './components/HomeComponent' 
import SecureComponent from './components/SecureComponent'
import CreateEventComponent from "./components/CreateEventComponent";
import {useIsAuthenticated, useAuthHeader, useAuthUser } from 'react-auth-kit'
import { chursterLink } from './Helpers/routeHelper'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import FooterComponent from './components/GeneralComponent/FooterComponent'
import {styled} from "@mui/system"; 
import AuthenticatedTopNavigationComponent from './components/NavigationComponent/AuthenticatedTopNavigationComponent';
import axios from "axios"; 
import { IUserOptions } from './Types/chursterType'
import AuthUserDetails from './components/CustomHookComponent/AuthUserDetails';
 

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
    const authUser = useAuthUser()
    const [isEnabled, setIsEnabled]= useState(false);

    
    /* Eery refresh get the user details */
    const optionsUser : IUserOptions = {  
         isAuthenticated: isAuthenticated(),
         userID: authUser()?.uid,  
         isEnabled: isEnabled
    } 
    /* Eery refresh get the user details */
    
    //Get the jwt in global ways
    useEffect(()=>{
        if(authHeader() && isAuthenticated()){ 
            setIsEnabled(true);
            axios.defaults.headers.common['Authorization'] = authHeader();
        }
    },[axios, authHeader, isAuthenticated()])

    return ( 
        <BrowserRouter>
            <PageWrapper>
                <AuthUserDetails {...optionsUser} />
                {!isAuthenticated() ? <NavigationComponent /> : <AuthenticatedTopNavigationComponent />}
                <Routes>
                    <Route
                        path={chursterLink.home}
                        element={ isAuthenticated()  ? <Navigate to={chursterLink.dashboard} /> : <HomeComponent/> }
                    />  
                    <Route path={chursterLink.about} element={<p>About Us</p>}/>
                    <Route path={chursterLink.contact} element={<p>Contact Us</p>}/> 
                   

                    {isAuthenticated() && <Route path={chursterLink.dashboard} element={
                        <RequireAuth loginPath={chursterLink.home}>
                            <SecureComponent/>
                        </RequireAuth>
                    }/>}
                    {isAuthenticated() && <Route path={'/create-event'} element={
                        <RequireAuth loginPath={chursterLink.home}>
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