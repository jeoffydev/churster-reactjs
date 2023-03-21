 
import axios from "axios";
import { ICreateForm, ILoginForm } from './../Types/chursterType'; 
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

export async function adminGetAllContractorsQuery() { 
    const response = await axios.get(`${url}/api/contractors/users/all`)  
    return  response;
}

export async function contractorGetAllMembersQuery() { 
    const response = await axios.get(`${url}/api/contractors/users`)  
    return  response;
}

export async function createUserQuery(data: ICreateForm) {
    const {email, password, name, organisation_id, access } = data;
    const response = await axios.post(`${url}/api/contractors/user/create`, { 
        name,
        email, 
        password,  
        organisation_id,
        access
    })  
    return  response;
}

export async function logoutQuery() {   
    const response = await axios.get(`${url}/api/contractors/logout`, { }) 
    return  response;
}
 

 