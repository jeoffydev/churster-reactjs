import { useQuery } from 'react-query';  
import { getOrgEventsQuery } from '../../Queries/EventQueries';
export default function useEventQuery( orgID: number, enableEvent: boolean)   { 
    return useQuery(  ["getOrgEvents", orgID], () =>getOrgEventsQuery(orgID), {
        enabled: enableEvent, 
    })
}
 