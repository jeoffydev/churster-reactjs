 
import { useEffect,  useState } from "react";  
import { IUserOptions, IUserDetails } from '../../Types/chursterType';
import { useAtom } from 'jotai'; 
import { useQuery } from 'react-query'; 
import { userDetailsQuery } from "../../Queries/LoginQueries"; 
import { userDetailsAtom, userOrganisationAtom } from '../../Helpers/AuthAtomObject';  
import {useNavigate } from 'react-router-dom'
import { chursterLink } from '../../Helpers/routeHelper';
import {   useSignOut    } from 'react-auth-kit' 

export const USER_LIST_REFETCH_INTERVAL = 1000 * 60;
 

export const AuthUserDetails = (options: IUserOptions) => {
    const { userID,   isAuthenticated, isEnabled } = options;  
    const id: number = parseInt(userID);
    const [, setUserFetched ]= useState<IUserDetails | undefined>(undefined);
    const [, setUserDetails] = useAtom(userDetailsAtom); 
    const [, setOrgDetails] = useAtom(userOrganisationAtom);   
    const navigate = useNavigate()
    const signOut = useSignOut(); 

    const {  data,  isSuccess, isError, status   } = useQuery( "userDetails", () => userDetailsQuery(id),
      {
                enabled: isAuthenticated && isEnabled, //only enable query
                refetchInterval: USER_LIST_REFETCH_INTERVAL,
                refetchOnWindowFocus: false,
      });
 
      
      useEffect(()=>{
            if(data && isSuccess && isAuthenticated){   
                //Save to atoms
                setUserFetched(data.data.userDetails);
                setUserDetails(data.data.userDetails);
                setOrgDetails(data.data.userOrganisation[0].organisation[0])
            } 

            if(isError && status === 'error'){
                signOut()
                navigate(chursterLink.home)  
            }
      },[ data, isSuccess, isError, status,   isAuthenticated]) 
     
    return <></>;
};

export default AuthUserDetails;
 