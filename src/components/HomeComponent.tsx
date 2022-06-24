import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom' 
import { Card, CardActions, Button, ButtonGroup, CardContent } from "@mui/material"; 
import {styled} from "@mui/system";  
 

const HomeComponent = () => {
    const navigate = useNavigate() 

    const CardWrapper  = styled('div') `
        margin: 1rem;
        display: flex;
        flex-direction: column; 
        justify-content: center;
        align-items: center;      
        border-radius:0.2rem;
    `;

    const LogoHolder = styled('div')`
        font-weight:500;
    `;
   
     
 
    return (
        <React.Fragment>  
            <CardWrapper> 
                    <CardContent>
                        <LogoHolder>Churster</LogoHolder> 
                    </CardContent>
                    <CardActions>
                    <ButtonGroup  size="large" aria-label="large button group"> 
                        <Button disabled={true} >Member</Button>
                        <Button onClick={()=> navigate('/login')}>Contractor</Button>
                    </ButtonGroup> 
                    </CardActions>  
            </CardWrapper> 
        </React.Fragment>
    )
}

export default HomeComponent