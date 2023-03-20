

import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { chursterString } from '../Helpers/stringHelper';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { IEventTypes } from './../Types/chursterType';

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

 const BoxedCardContent = styled(CardContent)(()=>({
    display: 'flex',
    justifyContent: 'left',
    justifyItems:'flex-start',
    "& p": {
        textAlign: 'left'
    }
 }));

 const BoxedDivMap = styled('div')(()=>({
    textAlign: 'left',
    borderBottom: `1px solid ${ExtraPalette.c_253040}`
 }));

const CreateEventTeaserComponent = () => {

    // placeholder/sample data from api
    const eventTeaser: IEventTypes[]  = [
        {
            id: 1,
            active: 1,
            title: '#Event Name1',
            description: "Test 1",
            date: '#Event Date1'
        },
        {
            id: 2,
            active: 1,
            title: '#Event Name2',
            description: "Test 2",
            date: '#Event Date2'
        },
    ];

    const checkBoolEventTeaser: boolean = eventTeaser.length > 0;

    const card = (
        <>
            {
                checkBoolEventTeaser ? eventTeaser.map((event, index) => {
                    return (
                        <div key={index}>
                            <BoxedDivMap>
                                <BoxedCardContent key={index}>
                                    <Typography gutterBottom>
                                        {event.date}
                                    </Typography>
                                    <Typography variant="body2">
                                        {event.title}
                                    </Typography>
                                </BoxedCardContent>
                                <CardActions>
                                    <Button size="small">Read more <TrendingFlatIcon /></Button>
                                </CardActions>
                            </BoxedDivMap>
                        </div>
                    )
                }) : (
                    <p>{chursterString.noEvent}</p>  
                )
            }
        </>
      );

    return (
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.latestEventCard}
                            </HeadingTypography>
                            <Card variant="outlined">{card}</Card>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.addNewEvent}
                            </HeadingTypography>
                        </Item>
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default CreateEventTeaserComponent;