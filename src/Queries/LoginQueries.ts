 
import axios from "axios";
import { ILoginForm } from './../Types/chursterType'; 

 
export const GetLogin = async (user:ILoginForm) => {
    const { email, password } = user;   
    return await axios.post('http://localhost:8000/api/contractors/login',{
        email,
        password
    });    
};
 

 