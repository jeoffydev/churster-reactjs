import { useQuery } from 'react-query'; 
import { adminGetAllContractorsQuery, contractorGetAllMembersQuery } from '../../Queries/LoginQueries';

export default function useGetContractorMembers( isAdmin: boolean, enableMember: boolean)   { 
    console.log("ACTIVE ", enableMember)
    return   useQuery( "contractorGetAllMembers", () => isAdmin ? adminGetAllContractorsQuery() : contractorGetAllMembersQuery(),
    {
        enabled: enableMember, 
        refetchInterval: 1500
    });
}