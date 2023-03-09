 
import axios from "axios";
import { isLocalhost } from './Setup';
 
 /**
  *  Note: the axios global Authorisation header is in RoutesComponent.tsx
  * @param data 
  * @returns 
  */
const url = isLocalhost();  

export async function getAllOrganisationsQuery() { 
    const response = await axios.get(`${url}/api/organisations/all`)  
    return  response;
}


 