 
import { useEffect,  useState } from "react";  
import { IUserOptions, IUserDetails } from './../../Types/chursterType';
import { useAtom } from 'jotai'; 
import { useQuery } from 'react-query'; 
import { userDetailsQuery } from "../../Queries/LoginQueries"; 
import { userDetailsAtom, userOrganisationAtom } from './../../Helpers/AuthAtomObject';
import { chursterString } from "../../Helpers/stringHelper";  

export const USER_LIST_REFETCH_INTERVAL = 1000 * 60;

export const useGetUserDetails = (options: IUserOptions) => {
    const { userID,   isAuthenticated, isEnabled } = options;  
    const id: number = parseInt(userID);
    const [userFetched, setUserFetched ]= useState<IUserDetails | undefined>(undefined);
    const [, setUserDetails] = useAtom(userDetailsAtom); 
    const [, setOrgDetails] = useAtom(userOrganisationAtom);   
   
    const {  data,  isSuccess, isError   } = useQuery( "userDetails", () => userDetailsQuery(id),
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
      },[ data, isSuccess, isError, isAuthenticated]) 
     
    return {  userFetched  };
};
 