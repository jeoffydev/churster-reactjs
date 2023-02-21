
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
import { useForm } from "react-hook-form";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import { ICreateForm, IUserDetails } from '../Types/chursterType';

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

    // Submit form
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = (data: {}) => console.log(data);
    
    return (  
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                                {chursterString.members} {chursterString.listOrgTxt}
                        </Item>
                        <Item>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                        {
                            data?.data ? data.data.map((user: IUserDetails) => {

                                return(
                                    <>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <PersonIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={user.name} />
                                            </ListItemButton>
                                    </>
                                )
                            }) : `${chursterString.noMembers}`
                        }
                        </List>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            {chursterString.create} {chursterString.members} 
                        </Item>
                        <>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type={'number'} defaultValue="Organization ID" {...register("organisation_id", { required: true })} />
                                {errors.organisation_id && <span>Organisation ID is required</span>}
                                <input type={'text'} defaultValue="Full Name" {...register("name", { required: true })} />
                                {errors.name && <span>Full Name is required</span>}
                                <input type={'email'} defaultValue="Email Address" {...register("email", { required: true })} />
                                {errors.email && <span>Email Address is required</span>}
                                <input type={'password'} {...register("password", { required: true })} />
                                {errors.password && <span>Password is required</span>}
                                <input type="submit" />
                            </form>
                        </>
                        
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default MembersComponent