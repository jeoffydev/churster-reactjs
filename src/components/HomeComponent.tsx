import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeComponent = () => {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={()=> navigate('/login')}>Go to Login</button>
        </div>
    )
}

export default HomeComponent