import React  from 'react'
import { useAuthUser, useSignOut, useIsAuthenticated, useAuthHeader  } from 'react-auth-kit'
import {useNavigate} from 'react-router-dom'

const SecureComponent = () => {
    const signOut = useSignOut()
    const authUser = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    const authHeader = useAuthHeader()

    console.log("AUTH ", authUser())
    console.log("isAuthenticated ", isAuthenticated())
    console.log("authHeader ", authHeader())

    const handleLogout = ()=>{
        signOut()
        navigate('/')
    }
    return (
        <div>
            <p>{`Hello ${authUser()?.name}   Auth`}</p>
            <button onClick={handleLogout}>Sign Out!</button>
        </div>
    )
}

export default SecureComponent