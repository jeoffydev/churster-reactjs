import React from 'react'    
import { useAtom } from 'jotai';
import { userOrganisationAtom, userDetailsAtom, isAdminAtom } from './../../Helpers/AuthAtomObject'; 
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
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import PianoIcon from '@mui/icons-material/Piano';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const SideBarComponent = () => {   
    const [orgDetails, ] = useAtom(userOrganisationAtom); 
    const [userDetails, ] = useAtom(userDetailsAtom); 
    const [isAdmin, ] = useAtom(isAdminAtom);
    const labelName = orgDetails?.org_name ? orgDetails.org_name : "..."
    const navigate = useNavigate() 
    return  (<React.Fragment>  
                <> 
                    {
                           !isAdmin && (
                            <Stack direction="column" spacing={1}>
                                <Chip icon={<ChurchIcon />} label={labelName} /> 
                            </Stack>
                           )
                    } 

                    <List sx={style} component="nav" aria-label="mailbox folders">
                        {
                            isAdmin && (
                                <ListItem button onClick={()=>navigate(chursterLink.organisations)}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ChurchIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={chursterString.organisations}  />
                                </ListItem>
                            )
                        }
                        
                        <ListItem button onClick={()=>navigate(chursterLink.members)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PeopleAltIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chursterString.members}  />
                        </ListItem>
                        <ListItem button onClick={()=>navigate(chursterLink.services)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <ServiceIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chursterString.services}  />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={()=>navigate(chursterLink.instruments)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <PianoIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chursterString.instruments}  />
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={()=>navigate(chursterLink.songs)}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AudiotrackIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={chursterString.songs}  />
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