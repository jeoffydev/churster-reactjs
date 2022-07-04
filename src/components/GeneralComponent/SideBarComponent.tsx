import React from 'react'   
import styled from "styled-components";   
import { useAtom } from 'jotai';
import {   userOrganisationAtom } from './../../Helpers/AuthAtomObject'; 
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ChurchIcon from '@mui/icons-material/Church'; 
import {  useNavigate } from 'react-router-dom';
import ServiceIcon from '@mui/icons-material/MiscellaneousServices'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar'; 
import Avatar from '@mui/material/Avatar';
import { chursterLink } from '../../Helpers/routeHelper';
import { chursterString } from '../../Helpers/stringHelper';

 

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const SideBarComponent = () => {   
    const [orgDetails, ] = useAtom(userOrganisationAtom); 
    const labelName = orgDetails?.org_name ? orgDetails.org_name : "..."
    const navigate = useNavigate()  
    return  (<React.Fragment>  
                <> 
                    <Stack direction="column" spacing={1}>
                        <Chip icon={<ChurchIcon />} label={labelName} /> 
                    </Stack>
 

                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button onClick={()=>navigate(chursterLink.services)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ServiceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chursterString.services}  />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemAvatar>
                                <Avatar>
                                    <ServiceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                         
                    </List>

                    
                </>
            </React.Fragment>);
}

export default SideBarComponent;