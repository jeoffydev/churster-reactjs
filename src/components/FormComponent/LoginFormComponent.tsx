import React, {useState, useEffect} from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import Box from '@mui/material/Box';    
import EmailIcon from '../../Icons/EmailIcon';
import Button from '@mui/material/Button';
import { PasswordIcon } from './../../Icons/PasswordIcon';
import { SubmitIcon } from './../../Icons/SubmitIcon';
import { chursterString } from '../../Helpers/stringHelper';
import { useForm,  SubmitHandler } from "react-hook-form";
import { ILoginForm } from './../../Types/chursterType';
import ChursterInputBoxComponent from './ChursterInputBoxComponent';
import {  loginQuery } from '../../Queries/LoginQueries';
import {   useMutation } from "react-query"; 
import CircularProgress from '@mui/material/CircularProgress'; 
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useIsAuthenticated, useSignIn} from 'react-auth-kit'
import {useNavigate } from 'react-router-dom'
import { chursterLink } from '../../Helpers/routeHelper';
import { useAtom } from 'jotai';
import { userDetailsAtom, userOrganisationAtom } from './../../Helpers/AuthAtomObject';
 

const BoxWrapper = styled(Box)(() => ({
    display:'flex',
    alignItems: 'center',
    marginBottom:"0.5rem",  
    width:'100%', 
}));
 
const BoxWrapperExtension = styled(BoxWrapper)(() => ({ 
     justifyContent:'flex-end'
}));

const ButtonSubmit = styled(Button)(()=>({ 
    borderRadius: '0.938rem !important',
    padding:'0.7rem 1.5rem !important',
    background: `${ExtraPalette.DarkBlueColor} !important `,
    border: `1px solid ${ExtraPalette.GreenColor} !important`,
    "& span":{
        display:'inline-block',
        padding: '0 0.4rem',  
    }
}));

const CircularLoadingStyled = styled(CircularProgress)(()=>({ 
     color: `${ExtraPalette.c_ffffff} !important`
}));



const BackdropLoading = styled(Backdrop)(()=>({ 
    color: ExtraPalette.c_fff,
    zIndex:999
}));
 

const LoginFormComponent = () => {  
    
    const { handleSubmit, control } = useForm<ILoginForm>();
    const [open, setOpen] = useState(false);
    const loginMutation = useMutation(loginQuery);
    const isAuthenticated = useIsAuthenticated()
    const signIn = useSignIn()
    const navigate = useNavigate()
    //User Atom object
    const [userDetails, setUserDetails] = useAtom(userDetailsAtom); 
    const [ , setOrgDetails] = useAtom(userOrganisationAtom);
   
    /**
     * Submit Login Form
     * 
     */
    const onSubmit: SubmitHandler<ILoginForm> = data => {
        loginMutation.mutate(data); 
    } 
   
     /**
     * Submit Error
     * 
     */
    useEffect(()=>{
        if(loginMutation.isError){ 
            setOpen(loginMutation.isError)
        } 
    },[loginMutation.isError])
 

     /**
     * Submit Success
     * 
     */
    useEffect(()=>{
        if(loginMutation.isSuccess && loginMutation.status === 'success'){   
            //Restructure to its own component
            if (signIn({
                token: loginMutation.data.data.jwt, //Just a random token
                tokenType: 'Bearer',    // Token type set as Bearer
                authState: { name: loginMutation.data.data.userDetails.name, uid:  loginMutation.data.data.userDetails.id },   // Dummy auth user state
                expiresIn: 2  // => 1 year is 525600, Token Expriration time, in minutes 
            })) { 
                //Save to atom or Redux
                setUserDetails(loginMutation.data.data.userDetails);
                setOrgDetails(loginMutation.data.data.userOrganisation)
                // If Login Successfull, then Redirect the user to secure route
                navigate(chursterLink.dashboard)
            } else {
                // Else, there must be some error. So, throw an error
                setOpen(true);
            }
        } 
    },[loginMutation.isSuccess, loginMutation.status])

     /**
     * If login then redirect to secure pages
     * 
     */
    useEffect(()=>{
        if (isAuthenticated() && userDetails?.id) {
            navigate(chursterLink.dashboard);
        }
    },[isAuthenticated, navigate, userDetails])

    const isLoading: boolean = loginMutation.status === 'loading' && !loginMutation.data; 
    const handleClose = () => { 
        setOpen(false);
    };

    const actionSnackBar = (
        <> 
          <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      );

    return  (
            <React.Fragment>  
                    <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message={chursterString.loginErrorMessage}
                            action={actionSnackBar}
                    />
                    <>
                        <BackdropLoading  open={isLoading} >
                            <CircularLoadingStyled  />
                        </BackdropLoading>
                    </>
                      
                    <form onSubmit={handleSubmit(onSubmit)}> 
                        <BoxWrapper>
                            <ChursterInputBoxComponent 
                                name ={"email"}
                                type={"email"}
                                control={control}
                                required = {true}
                                placeholder="Username"
                                errorMessage={chursterString.emailRequired}
                                defaultValue={""}
                            ><EmailIcon /></ChursterInputBoxComponent>
    
                        </BoxWrapper> 
                        <BoxWrapper>
                            <ChursterInputBoxComponent 
                                name ={"password"}
                                type={"password"}
                                control={control}
                                required = {true}
                                placeholder="Password"
                                errorMessage={chursterString.passwordRequired}
                                defaultValue={""}
                            ><PasswordIcon /></ChursterInputBoxComponent> 

                        </BoxWrapper>
                        <BoxWrapperExtension> 
                            <ButtonSubmit type='submit' variant="contained"  >
                                <span>{chursterString.login}</span> <SubmitIcon />
                            </ButtonSubmit>
                        </BoxWrapperExtension>
                    </form>  
            </React.Fragment>
        );
}

export default LoginFormComponent;