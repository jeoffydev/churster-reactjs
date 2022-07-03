import React  from 'react'
import { useAuthUser, useSignOut, useIsAuthenticated, useAuthHeader  } from 'react-auth-kit'
import {useNavigate} from 'react-router-dom';
import { useAtom } from 'jotai';
import { userDetailsAtom, userOrganisationAtom } from './../Helpers/AuthAtomObject';
 

const SecureComponent = () => { 
    const authUser = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    const authHeader = useAuthHeader()
    const [userDetails, ] = useAtom(userDetailsAtom); 
    const [orgDetails, ] = useAtom(userOrganisationAtom);

    console.log("AUTH ", authUser())
    console.log("isAuthenticated ", isAuthenticated())
    console.log("authHeader ", authHeader())
 
    
    return (
        <div> 
            
                <>
                 <p>{`Hello ${authUser()?.name}   Auth  from org =>   ${orgDetails?.org_name} `}  </p>
                  <p> <button onClick={()=>{navigate("/create-event")}}>Go to create event</button></p> 
                </>  
        </div>
    )
}

export default SecureComponent