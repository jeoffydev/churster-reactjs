 
import axios from "axios";
import { isLocalhost } from './Setup';
import { ICreateEvent } from './../Types/chursterType';
 
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
export async function createEventQuery(data: ICreateEvent) {
  const {title, date, active, description, organisation_id } = data;
  const response = await axios.post(`${url}/api/events/create`, { 
      title,
      active,
      date,
      description,
      organisation_id
  })  
  return  response;
}

 