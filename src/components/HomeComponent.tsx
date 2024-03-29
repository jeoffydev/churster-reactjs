import React  from 'react' 
import {    CardContent } from "@mui/material";
import {styled} from "@mui/system";  
import LogoComponent from './GeneralComponent/LogoComponent';
import TagLineComponent from './GeneralComponent/TagLineComponent'; 
import LoginFormComponent from './FormComponent/LoginFormComponent';  

const CardWrapper = styled(`div`)(() => ({
    margin: '1rem 0 2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1', 
    borderRadius:'0.2rem',  
}));

const LogoHolder = styled(`div`)(() => ({
    width: '100%',
    textAlign:'center',
    fontWeight: '500'
}));

const HomeComponent = () => { 
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
            </CardWrapper> 
        </React.Fragment>
    )
}

export default HomeComponent