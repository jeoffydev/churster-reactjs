 
 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';  
import Typography from '@mui/material/Typography'; 
import { chursterString } from '../../Helpers/stringHelper';
import { ExtraPalette } from '../../Helpers/constant';
import { useAtom } from 'jotai';
import { organisationIDAtom } from '../../Helpers/AuthAtomObject';
import { useQuery } from 'react-query';
import { getOrgEventsQuery } from '../../Queries/EventQueries';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';  
import { IEventTypes } from '../../Types/chursterType';
import EventIcon from '@mui/icons-material/Event';
import Card from '@mui/material/Card';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import TocIcon from '@mui/icons-material/Toc';

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }));

 const HeadingTypography = styled(Typography)(()=>({
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textAlign: 'left'
 }));

 const EventWrapper = styled('div')(()=>({
    display: 'flex',
    padding: '0.5rem',
    "& svg": {
        marginRight: '0.5rem'
    },
    "& span": {
        position: 'relative',
        top: '0.1rem'
    }
 }));

const MembersEventComponent = () => {

    const [orgID, ] = useAtom(organisationIDAtom);  
    
     //Get all events from this Orgnaisation member
     const {  data, status   } =  useQuery( ["getOrgEvents", orgID], () =>getOrgEventsQuery(orgID), {
        enabled: !!orgID,
        refetchInterval: 500
    });
   
    const events: IEventTypes[] = status === 'success' && !data?.data.error  && data?.data.organisationEvent; 
    const eventActive: boolean = status === 'success' && !data?.data.error  && data?.data.organisationEvent[0] && ( data?.data.organisationEvent[0].active === 1 || data?.data.organisationEvent[0].active === '1' );
   
    return (
        <> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.upcomingEvent}
                            </HeadingTypography> 

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
                                    events.length > 0 && events.map((event: IEventTypes) => {

                                        return(
                                            <div key={event.id}>
                                                    {
                                                        event.active === 1 || event.active === '1' && (
                                                            <>
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <EventIcon />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={event.title} />
                                                                </ListItemButton>
                                                            </>
                                                        )
                                                    }
                                            </div>
                                        )
                                    }) 
                                } 
                            </List>
                        </Item>

                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.myEvent}
                            </HeadingTypography>
                        </Item>
                        <Item style={{ marginTop: '0.3rem'}}> 
                            {  events && eventActive && 
                             (
                                 <>
                                    { 
                                        <Card variant="outlined"> 
                                            { 
                                               events[0].title && (
                                                <>
                                                    <EventWrapper>
                                                        Event Title: {events[0].title}
                                                    </EventWrapper>
                                                </>
                                               )
                                            }   
                                            { 
                                                events[0].date &&  (
                                                    <>
                                                        <EventWrapper>
                                                            <QueryBuilderIcon />  <span>{events[0].date} </span>
                                                        </EventWrapper>
                                                    </>
                                                )
                                            }
                                            { 
                                                events[0].description &&  (
                                                    <>
                                                        <EventWrapper>
                                                            <TocIcon />  <span>{events[0].description} </span>
                                                        </EventWrapper>
                                                    </>
                                                )
                                            }
                                        
                                        </Card> 
                                    }
                                    
                                 </>
                             )
                            }
                            {
                                !events && <>0 Event</>
                            }
                        </Item>
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </> 
    )
}

export default MembersEventComponent