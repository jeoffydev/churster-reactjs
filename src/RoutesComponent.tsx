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
import { IUserOptions, UserAccess } from './Types/chursterType'
import AuthUserDetails from './components/CustomHookComponent/AuthUserDetails';
import MembersComponent from './components/MembersComponent'
import { useAtom } from 'jotai';
import { userDetailsAtom } from './Helpers/AuthAtomObject';
import MembersEventComponent from './components/members/MembersEventComponent';
import OrganisationComponent from './components/OrganisationComponent';

 

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
    const [userDetails, ] = useAtom(userDetailsAtom); 
 
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
            console.count("COUNT in ROUTESCOMPONENT 1")
            setIsEnabled(true);
            axios.defaults.headers.common['Authorization'] = authHeader();
        }
    },[authHeader, isAuthenticated])

    const isMember = userDetails?.user_access[0].access_level === UserAccess.member;
    const isAdmin = userDetails?.user_access[0].access_level === UserAccess.admin;
    const checkAccessForNotMembers = isAuthenticated() && !isMember;
    console.log("checkAccessForNotMembers ", checkAccessForNotMembers)
    return ( 
        <BrowserRouter>
            <PageWrapper>
                <AuthUserDetails {...optionsUser} />
                {!isAuthenticated() ? <NavigationComponent /> : <AuthenticatedTopNavigationComponent />}
                <Routes>
                    {
                        isAdmin && <Route path={chursterLink.organisations} element={
                            <RequireAuth loginPath={chursterLink.home}>
                                <OrganisationComponent />
                            </RequireAuth>
                        }/>
                    }
                    {!checkAccessForNotMembers && <Route path={chursterLink.memberDashboard} element={
                        <RequireAuth loginPath={chursterLink.home}>
                            <MembersEventComponent />
                        </RequireAuth>
                    }/>}
                    <Route
                        path={chursterLink.home}
                        element={ checkAccessForNotMembers  ? <Navigate to={chursterLink.dashboard} /> : <HomeComponent/> }
                    />  
                    <Route path={chursterLink.about} element={<p>About Us</p>}/>
                    <Route path={chursterLink.contact} element={<p>Contact Us</p>}/> 
                   

                    {checkAccessForNotMembers && <Route path={chursterLink.dashboard} element={
                        <RequireAuth loginPath={chursterLink.home}>
                            <SecureComponent/>
                        </RequireAuth>
                    }/>}
                    
                    {checkAccessForNotMembers && <Route path={chursterLink.members} element={
                        <RequireAuth loginPath={chursterLink.home}>
                            <MembersComponent />
                        </RequireAuth>
                    }/>}
                    {checkAccessForNotMembers && <Route path={chursterLink.createEvent} element={
                        <RequireAuth loginPath={chursterLink.home}>
                            <CreateEventComponent />
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