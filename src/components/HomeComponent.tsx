import React from 'react'
import { useNavigate } from 'react-router-dom' 
import {   CardActions, Button, ButtonGroup, CardContent } from "@mui/material";
import {styled} from "@mui/system";  
import LogoComponent from './GeneralComponent/LogoComponent';
import TagLineComponent from './GeneralComponent/TagLineComponent';
import { chursterLink } from '../Helpers/routeHelper';
import LoginFormComponent from './FormComponent/LoginFormComponent';
import { chursterString } from '../Helpers/stringHelper';
import { useForm } from "react-hook-form";

const CardWrapper = styled(`div`)(() => ({
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'0.2rem'
}));

const LogoHolder = styled(`div`)(() => ({
    width: '100%',
    textAlign:'center',
    fontWeight: '500'
}));

const HomeComponent = () => {
    const navigate = useNavigate()  
    return (
        <React.Fragment>   
            <CardWrapper> 
                    <CardContent>
                        <LogoHolder>
                            <LogoComponent />
                            <TagLineComponent />
                        </LogoHolder> 
                    </CardContent>
                    <CardContent> 
                        <LoginFormComponent />
                    </CardContent>
                    <CardActions>
                    <ButtonGroup  size="large" aria-label="large button group"> 
                        <Button disabled={true} >{chursterString.member}</Button>
                        <Button onClick={()=> navigate(chursterLink.contractor)}>{chursterString.contractor}</Button>
                    </ButtonGroup> 
                    </CardActions>  
            </CardWrapper> 
        </React.Fragment>
    )
}

export default HomeComponent