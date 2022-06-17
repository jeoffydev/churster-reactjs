import React, {useEffect} from 'react'
import {useIsAuthenticated, useSignIn} from 'react-auth-kit'
import {useNavigate, Navigate} from 'react-router-dom'
import axios from "axios";

const Login = () => {
    const isAuthenticated = useIsAuthenticated()
    const signIn = useSignIn()
    const navigate = useNavigate()

    /**
     * Login Handle, the callback function onClick from the "Login" button
     *
     * This function demostrate a dummy authentication, using useSignIn function
     */
    const loginHandler = async () => {
        // Assuming that, all network Request is successfull, and the user is authenticated
        // let user = "Developer5@gmail.com";
        // let pw = 123456;
        // let name = "Developer";
        // await axios.post(`http://restapi.adequateshop.com/api/authaccount/login`, {
        //     email: user,
        //     password: pw
        // }, {
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         'Authorization': 'Bearer 35v3443bn368367n306306wbn407qn420b436b4'
        //     }
        // }).then( res=> {
        //     console.log("RES ", res)
        //     }
        // );

        if (signIn({
            token: '35v3443bn368367n306306wbn407qn420b436b4', //Just a random token
            tokenType: 'Bearer',    // Token type set as Bearer
            authState: {name: 'React User', uid: 123456},   // Dummy auth user state
            expiresIn: 120  // Token Expriration time, in minutes
        })) {
            // If Login Successfull, then Redirect the user to secure route
            navigate('/secure')
        } else {
            // Else, there must be some error. So, throw an error
            alert("Error Occoured. Try Again")
        }
    }
    console.log(isAuthenticated())

        useEffect(()=>{
            if (isAuthenticated()) {
                navigate('/secure');
            }
        },[isAuthenticated, navigate])


        return (
            <button onClick={loginHandler}>Log In!!</button>
        )

}

export default Login