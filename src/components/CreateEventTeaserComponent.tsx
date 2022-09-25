 /*


Dear sir/madam,

I am writing to express my interest for the position of Software Developer in CodeLingo. 

My name is Jeoffy Hipolito, I have 12 years’ experience in Web Development and more than a year in Software Development. 

I am a permanent resident, currently living in Dunedin and I have the right to work in New Zealand. 

I was browsing your website codeLingo.io and find the product very interesting and I want to be a part of the team to do all the duties and responsibilities required. I am currently working in SilverStripe as a Developer in bespoke team. However, I realised that I could do more in Software than building Websites, as I find Software as a Service (SaaS) products more exciting to get involve, fun and challenging to code.

In my previous job, I worked as a Web/Front-End Developer and mainly used ReactJS, Redux, TypeScript, NodeJS, etc. I also helped the UI/UX designer in planning as well as the organization's innovation activities and visiting the farmers for a product interview. I also have headless CMS experience using NextJs, KeystoneJS, GraphQL and MongoDB which gives me more confident that I am a great fit for this position. 

I sincerely hope that you will consider my application and discuss it further. 

Please see my attached resume for your reference. Thank you for your time and I look forward to speaking with you.

Sincerely,
Jeoffy Hipolito


 */

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
            eventName: '#Event Name1',
            eventDate: '#Event Date1'
        },
        {
            id: 2,
            eventName: '#Event Name2',
            eventDate: '#Event Date2'
        },
    ];

    const checkBoolEventTeaser: boolean = eventTeaser.length > 0;

    const card = (
        <>
            {
                checkBoolEventTeaser ? eventTeaser.map((event, index) => {
                    return (
                        <>
                            <BoxedDivMap key={index}>
                                <BoxedCardContent key={index}>
                                    <Typography gutterBottom>
                                        {event.eventDate}
                                    </Typography>
                                    <Typography variant="body2">
                                        {event.eventName}
                                    </Typography>
                                </BoxedCardContent>
                                <CardActions>
                                    <Button size="small">Read more <TrendingFlatIcon /></Button>
                                </CardActions>
                            </BoxedDivMap>
                        </>
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