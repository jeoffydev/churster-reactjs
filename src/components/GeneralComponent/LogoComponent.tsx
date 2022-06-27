import React from 'react' 
import { Link } from 'react-router-dom';
import {styled} from "@mui/system"; 
import { chursterString } from '../../Helpers/stringHelper';

const  LogoWrapper  = styled(`div`)(() => ({
    width: '12.5rem',
    height: '2.346rem',
    margin: '0px auto'
}));

const LogoComponent = () => {  
 
    return  (<React.Fragment>  
                <LogoWrapper> 
                    <Link to='/'> <img src={process.env.PUBLIC_URL + '/logo.png'} alt={chursterString.logoTitle} /> </Link>
                </LogoWrapper >
            </React.Fragment>); 
}

export default LogoComponent;