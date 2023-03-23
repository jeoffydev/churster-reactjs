
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';
import { chursterString } from '../Helpers/stringHelper';
import { useQuery } from 'react-query';  
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from'@mui/icons-material/Person';
import {   IEventTypes } from '../Types/chursterType';
import { useAtom } from 'jotai';
import {  isAdminAtom, organisationIDAtom } from './../Helpers/AuthAtomObject';
import { useMutation } from 'react-query'; 
import { getOrgEventsQuery } from '../Queries/EventQueries';

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

 const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }) );
 

const EventsComponent = () => {  
     //User Atom object 
    const [isAdmin, ] = useAtom(isAdminAtom); 
    const [orgID, ] = useAtom(organisationIDAtom);  

    //Get all events from this Orgnaisation
    const {  data, status   } =  useQuery(  ["getOrgEvents", orgID], () =>getOrgEventsQuery(orgID), {
        enabled: !!orgID,
        refetchInterval: 500
    });
    
    return (  
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <Item>
                            <List
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                            >
                                {
                                    status === 'loading' && (
                                        <>
                                            {chursterString.loading}
                                        </>
                                    )
                                }
                                {
                                    status === 'success'  && data?.data.organisationEvent && data.data.organisationEvent.map((event: IEventTypes) => {

                                        return(
                                            <div key={event.id}>
                                                    <ListItemButton>
                                                        <ListItemIcon>
                                                            <PersonIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={event.title} />
                                                    </ListItemButton>
                                            </div>
                                        )
                                    }) 
                                }
                                { status === 'success' &&   data?.data.error && `${chursterString.noEvents}` }
                            </List>
                        </Item>
                    </Grid> 
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default EventsComponent