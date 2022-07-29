 
import axios from "axios";
import { ILoginForm } from './../Types/chursterType'; 
import { isLocalhost } from './Setup';
 
 /**
  *  Note: the axios global Authorisation header is in RoutesComponent.tsx
  * @param data 
  * @returns 
  */
const url = isLocalhost();  

export async function loginQuery(data: ILoginForm) {
    const {email, password } = data;
    
    const response = await axios.post(`${url}/api/contractors/login`, { 
        email,
        password 
    })  
    return  response;
}

export async function userDetailsQuery(id: number) { 
    const response = await axios.get(`${url}/api/contractors/user/${id}`)  
    return  response;
}

export async function contractorGetAllMembersQuery() { 
    const response = await axios.get(`${url}/api/contractors/users`)  
    return  response;
}

export async function logoutQuery() {   
    const response = await axios.get(`${url}/api/contractors/logout`, { }) 
    return  response;
}
 

 