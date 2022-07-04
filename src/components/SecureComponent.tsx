 
import { useAuthUser,   useIsAuthenticated, useAuthHeader  } from 'react-auth-kit'
import {useNavigate} from 'react-router-dom';  
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
 

const SecureComponent = () => { 
    const authUser = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    const authHeader = useAuthHeader() 

    console.log("AUTH ", authUser())
    console.log("isAuthenticated ", isAuthenticated())
    console.log("authHeader ", authHeader())
 
    
    return (  
        <AdminLayoutComponent> 
            <p> <button onClick={()=>{navigate("/create-event")}}>Go to create event</button></p>  
        </AdminLayoutComponent> 
    )
}

export default SecureComponent