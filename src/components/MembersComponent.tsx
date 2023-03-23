
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';
import { chursterString } from '../Helpers/stringHelper';
import { useQuery } from 'react-query'; 
import { adminGetAllContractorsQuery, contractorGetAllMembersQuery, createUserQuery } from '../Queries/LoginQueries';
import {useIsAuthenticated, useAuthHeader} from 'react-auth-kit'
import { useForm  } from "react-hook-form";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import {  ICreateForm, IOrganisation, IUserDetails } from '../Types/chursterType';
import { useAtom } from 'jotai';
import { userDetailsAtom, userOrganisationAtom, isAdminAtom, appIsLoading } from './../Helpers/AuthAtomObject';
import { useMutation } from 'react-query';
import { getAllOrganisationsQuery } from '../Queries/OrganisationQueries';
import useGetContractorMembers from './CustomHookComponent/useContractMembersQuery';

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

 const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }) );

 const FormWrapper = styled('div')(()=>({ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.5rem',
    margin:'0.3rem'
 }));

 const FormInput = styled('div')(()=>({
    margin:'0.3rem',
    '& input, select': { 
        display: 'flex', 
    }
 }));

const MembersComponent = () => { 
    const isAuthenticated = useIsAuthenticated() 
    const authHeader = useAuthHeader(); 
    const { register, handleSubmit,  formState: { errors }, reset } = useForm<ICreateForm>();
    const [queryMembers, setQueryMembers]= useState(false);
     //User Atom object 
    const [orgDetails, ] = useAtom(userOrganisationAtom); 
    const [isAdmin, ] = useAtom(isAdminAtom); 
    const [isLoading, ] = useAtom(appIsLoading);
    //Create user form
    const createMutation = useMutation(createUserQuery);

//     const {  data, status } = useQuery( "contractorGetAllMembers", () => isAdmin ? adminGetAllContractorsQuery() : contractorGetAllMembersQuery(),
//     {
//         enabled: queryMembers,
//         refetchOnWindowFocus: true,
//         refetchInterval: 800,
//     });
    
// console.log("MEMBERs DATA ", data)

    const { data, status } = useGetContractorMembers(isAdmin, queryMembers);

  
    //Get all the organisations for this user
    const {  data: allOrganisations   } = useQuery( "getAllOrganisations", () =>getAllOrganisationsQuery());
 
    useEffect(()=>{
        if(isAuthenticated() && authHeader()){
            console.count("COUNT in MEMBERSCOMPONENT 1")
            setQueryMembers(true);
        }

    },[isAuthenticated, authHeader])

    // console.log("isAuthenticated ", isAuthenticated())
    // console.log("authHeader ", authHeader())

    // console.log("QUERY ENABLED ", queryMembers)

    // console.log("DATA ", data?.data);
    // console.log("is success ", isSuccess)
    // console.log("is Errro ", isError)
    // console.log("status ", status)
    // console.log("userDetails ", userDetails) 
    // Submit form
    
    const onSubmit = (data: ICreateForm) => {
        data.access = isAdmin ? 1 : 2;
        if(!isAdmin) {
            data.organisation_id = orgDetails?.id;
        }
        createMutation.mutate(data); 
        setQueryMembers(true);
        reset({
            ...data 
        })
        
    }
     
    return (  
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Item>
                            {
                                isAdmin ?  chursterString.listContractors : <>{chursterString.members} {chursterString.listOrgTxt}</>
                            }
                            
                        </Item>
                        <Item>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            {
                                status === 'loading' && (
                                    <>
                                        {chursterString.loading}
                                    </>
                                )
                            }
                            {
                                status === 'success'  && data?.data && data.data.map((user: IUserDetails) => {

                                    return(
                                        <div key={user.id}>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <PersonIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={user.name} />
                                                </ListItemButton>
                                        </div>
                                    )
                                }) 
                            }
                            { status === 'success'  && data?.data && data.data.length === 0 && `${chursterString.noMembers}` }
                        </List>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            {chursterString.create} {chursterString.members} 
                        </Item>
                        <>
                            <FormWrapper>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {
                                        isAdmin && (
                                            <FormInput>
                                                <label>Organization</label>
                                                <select className='form-control' {...register("organisation_id", { required: true })}>
                                                    <option value="">-- Select --</option>
                                                    {
                                                        allOrganisations?.data?.organisationsList
                                                        && allOrganisations.data.organisationsList
                                                        .map((org: IOrganisation)=>org.active === 1 && <option key={org.id} value={org.id}>{org.org_name}</option>)
                                                    }
                                                </select>
                                                {errors.organisation_id && <span className='error'>Organisation ID is required</span>}
                                            </FormInput>
                                        ) 
                                    }
                                    
                                    <FormInput>
                                        <label>Full Name</label>
                                        <input type={'text'} defaultValue="" className='form-control'  {...register("name", { required: true })} />
                                        {errors.name && <span className='error'>Full Name is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <label>Email Address</label>
                                        <input type={'email'}  defaultValue="" className='form-control'  {...register("email", { required: true })} />
                                        {errors.email && <span className='error'>Email Address is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <label>Password</label>
                                        <input type={'password'}  defaultValue="" className='form-control' {...register("password", { required: true })} />
                                        {errors.password && <span className='error'>Password is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <input type="submit" className='btn btn-info' />
                                    </FormInput>
                                </form>
                            </FormWrapper>
                        </>
                        
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default MembersComponent