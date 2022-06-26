import React from 'react' 
import { Link } from 'react-router-dom';
import {styled} from "@mui/system"; 
 
const LogoWrapper  = styled('div')` 
    width:12.5rem;
    height:2.346rem;
    margin:0px auto; 
`; 
const LogoComponent = () => {  
 
    return  (<React.Fragment>  
                <LogoWrapper> 
                    <Link to='/'> <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Churster Logo" /> </Link>
                </LogoWrapper >
            </React.Fragment>); 
}

export default LogoComponent;