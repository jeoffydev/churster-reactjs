 
import axios from "axios";
import { isLocalhost } from './Setup';
 
 /**
  *  Note: the axios global Authorisation header is in RoutesComponent.tsx
  * @param data 
  * @returns 
  */
const url = isLocalhost();  

export async function getOrgEventsQuery(id: number | undefined) { 
    const response =  await axios.get(`${url}/api/events/${id}`)  
    return  response;
}


 