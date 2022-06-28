import React from 'react'  
import {styled} from "@mui/system"; 
import { chursterString } from '../../Helpers/stringHelper';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction'; 
import HomeIcon from '../../Icons/HomeIcon';
import { AboutIcon } from './../../Icons/AboutIcon';
import { ContactIcon } from './../../Icons/ContactIcon';
import { useLocation, useNavigate } from 'react-router-dom';
import { chursterLink } from '../../Helpers/routeHelper';
import { ExtraPalette } from '../../Helpers/constant';

const  MenuWrapper  = styled(Box)(() => ({  
    display:'flex',
    justifyContent: 'flex-end',  
    alignItems: 'center', 
    marginBottom:'1rem',
    flex:0.7,
    "& .MuiBottomNavigation-root":{
        backgroundColor:'transparent'
    },
    "& button":{
        padding: '0px 2rem',
       
    },
    "& button .MuiBottomNavigationAction-label":{
        fontSize: '0.875rem !important',
        marginTop:"0.4rem"
    }
}));

const NavigationComponent = () => {  
    const location = useLocation();  
    const navigate = useNavigate()  

    const isHomeActive: string = location.pathname === chursterLink.home ? ExtraPalette.BlueColor : "";
    const isAboutActive: string = location.pathname === chursterLink.about ? ExtraPalette.BlueColor : "";
    const isContactActive: string = location.pathname === chursterLink.contact ? ExtraPalette.BlueColor : "";
   
    return  (<React.Fragment>  
                <MenuWrapper>  
                        <BottomNavigation
                            showLabels  
                        >
                            <BottomNavigationAction onClick={()=> navigate(chursterLink.home)}  label={chursterString.home} icon={<HomeIcon iconColour={isHomeActive} />} />
                            <BottomNavigationAction onClick={()=> navigate(chursterLink.about)}  label={chursterString.about} icon={<AboutIcon iconColour={isAboutActive} />} />
                            <BottomNavigationAction onClick={()=> navigate(chursterLink.contact)} label={chursterString.contact} icon={<ContactIcon iconColour={isContactActive} />} />
                        </BottomNavigation> 
                </MenuWrapper >
            </React.Fragment>); 
}

export default NavigationComponent;