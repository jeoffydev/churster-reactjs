
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';
import { chursterString } from '../Helpers/stringHelper';
import { useQuery } from 'react-query'; 
import { contractorGetAllMembersQuery } from '../Queries/LoginQueries';
import {useIsAuthenticated, useAuthHeader} from 'react-auth-kit'

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

 const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }) );

const MembersComponent = () => { 
    const isAuthenticated = useIsAuthenticated() 
    const authHeader = useAuthHeader(); 
    const [queryMembers, setQueryMembers]= useState(false);

    const {  data,  isSuccess, isError, status   } = useQuery( "contractorGetAllMembers", () =>contractorGetAllMembersQuery(),
    {
        enabled: queryMembers,
        refetchOnWindowFocus: true,
    });

    useEffect(()=>{
        if(isAuthenticated() && authHeader()){
            console.count("COUNT in MEMBERSCOMPONENT 1")
            setQueryMembers(true);
        }

    },[isAuthenticated, authHeader])

    console.log("isAuthenticated ", isAuthenticated())
    console.log("authHeader ", authHeader())

    console.log("QUERY ENABLED ", queryMembers)

    console.log("DATA ", data?.data);
    console.log("is success ", isSuccess)
    console.log("is Errro ", isError)
    console.log("status ", status)
    
    return (  
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                                {chursterString.members} Form
                        </Item>
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default MembersComponent