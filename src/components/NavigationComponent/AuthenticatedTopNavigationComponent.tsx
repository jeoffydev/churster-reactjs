import React, {useState } from 'react'  
import {styled} from "@mui/system";  
import Box from '@mui/material/Box';  
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { stringAvatar } from '../../Helpers/functionHelper';  
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import {useNavigate} from 'react-router-dom' 
import { chursterString } from '../../Helpers/stringHelper';
import {   useMutation } from "react-query"; 
import { logoutQuery } from '../../Queries/LoginQueries';
import { useAuthUser, useSignOut    } from 'react-auth-kit'
import { chursterLink } from '../../Helpers/routeHelper';
import LogoComponent from '../GeneralComponent/LogoComponent';
import AddIcon from '@mui/icons-material/Add';

const  MenuWrapper  = styled(Box)(() => ({  
    display:'flex',
    justifyContent: 'flex-end',  
    alignItems: 'center', 
    marginBottom:'1rem',
    flex:0.7,  
    padding: '0 1rem',
    maxHeight:'3rem', 
}));

const LogoWrapper =  styled(LogoComponent)(() => ({ 
    justifyContent: 'flex-start',   
}));

const AuthenticatedTopNavigationComponent = () => {  
       
    const authUser = useAuthUser();
    const signOut = useSignOut(); 
    const [anchorEl, setAnchorEl] =  useState<null | HTMLElement>(null); 
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const logoutMutation = useMutation(logoutQuery); 

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    }; 

    const handleLogout = ()=>{
        //use this => if logoutMutation.data.success === 'logout'
        signOut()
        navigate(chursterLink.home)  
        logoutMutation.mutate();  
    }
    
   
    
    return  (<React.Fragment>  
                <MenuWrapper> 
                    <LogoWrapper />
                    <Button 
                        variant="contained" 
                        endIcon={<AddIcon />}
                        onClick={()=>navigate('/create-event')}
                    >
                        {chursterString.create}
                    </Button>
                    <Button
                        id="basic-button-churster"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Stack direction="row" spacing={2}>
                            <Avatar {...stringAvatar(authUser()?.name)} /> 
                        </Stack>
                    </Button>
                    <Menu
                        id="basic-menu-churster"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    > 
                        <MenuItem disabled={true}>Hello {authUser()?.name}</MenuItem>
                        <MenuItem onClick={()=>{}}>{chursterString.changePassword}</MenuItem>
                        <MenuItem onClick={handleLogout}>{chursterString.logout}</MenuItem>
                    </Menu> 
                </MenuWrapper >
            </React.Fragment>); 
}

export default  AuthenticatedTopNavigationComponent;