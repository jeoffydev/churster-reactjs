import React from 'react' 
import { Link } from 'react-router-dom';
import {styled} from "@mui/system"; 
import { chursterString } from '../../Helpers/stringHelper';
import { chursterLink } from '../../Helpers/routeHelper';

const  LogoWrapper  = styled(`div`)(() => ({
    width: '12.5rem',
    height: '2.346rem',
    margin: '0px auto'
}));
 

const LogoComponent = () => {  
 
    return  (<React.Fragment>  
                <LogoWrapper> 
                    <Link to={chursterLink.home}> <img src={process.env.PUBLIC_URL + '/logo.png'} alt={chursterString.logoTitle} style={{width: '12.5rem', height:'auto'}} /> </Link>
                </LogoWrapper >
            </React.Fragment>); 
}

export default LogoComponent;