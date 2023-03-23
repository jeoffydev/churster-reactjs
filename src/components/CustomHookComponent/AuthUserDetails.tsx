 
import { useEffect,  useState } from "react";  
import { IUserOptions, IUserDetails } from '../../Types/chursterType';
import { useAtom } from 'jotai'; 
import { useQuery } from 'react-query'; 
import { userDetailsQuery } from "../../Queries/LoginQueries"; 
import { userDetailsAtom, userOrganisationAtom, isAdminAtom, isContractorAtom, isMemberAtom, appIsLoading, organisationIDAtom } from '../../Helpers/AuthAtomObject';  
import {useNavigate } from 'react-router-dom'
import { chursterLink } from '../../Helpers/routeHelper';
import {   useSignOut    } from 'react-auth-kit'  
import { UserAccess } from './../../Types/chursterType'; 
import LoadingComponent from "../GeneralComponent/LoadingComponent"; 

export const USER_LIST_REFETCH_INTERVAL = 1000 * 60;
 

export const AuthUserDetails = (options: IUserOptions) => {
    const { userID,   isAuthenticated, isEnabled } = options;  
    const id: number = parseInt(userID);
    const [, setUserFetched ]= useState<IUserDetails | undefined>(undefined);
    const [, setUserDetails] = useAtom(userDetailsAtom); 
    const [, setOrgDetails] = useAtom(userOrganisationAtom);  
    const [, setIsAdmin] = useAtom(isAdminAtom); 
    const [, setIsContractor] = useAtom(isContractorAtom); 
    const [, setIsMember] = useAtom(isMemberAtom); 
    const [isLoading, setAppIsLoading] = useAtom(appIsLoading);
    const [, setOrgId] = useAtom(organisationIDAtom);
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
                console.count("COUNT in AUTHUSERDETAILS 1")
                //Save to atoms 
                setUserFetched(data.data.userDetails);
                setUserDetails(data.data.userDetails);
                setOrgDetails(data.data.userOrganisation[0].organisation[0]);
                //setIsAdmin(data.data.userDetails.user_access[0].access_level === UserAccess.admin);
                //setIsContractor(data.data.userDetails.user_access[0].access_level === UserAccess.constructor);
                //setIsMember(data.data.userDetails.user_access[0].access_level === UserAccess.member);
                setOrgId(data.data.userOrganisation[0].org_id); 
            } 

            if(isError && status === 'error'){ 
                setAppIsLoading(false);
                signOut()
                navigate(chursterLink.home)  
            }
      },[ 
          data, 
          isSuccess, 
          isError, 
          status,   
          isAuthenticated, 
          navigate, 
          signOut, 
          setUserFetched,
          setOrgDetails, 
          setUserDetails,  
          setIsMember,
          setOrgId, 
        ]) 

        useEffect(()=> {  
            setAppIsLoading(true) 
            if(status === 'success' || !isAuthenticated) {
                setAppIsLoading(false);
            }  
        }, [
            isAuthenticated,
            status,
            setAppIsLoading
        ]); 
     
    return <>
        {isLoading ? (
            <LoadingComponent /> 
        ): <></>}
    </>;
};

export default AuthUserDetails;
 