 

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
import { ICreateForm, IEventTypes, ICreateEvent } from './../Types/chursterType';
import { useAtom } from 'jotai';
import { organisationIDAtom } from '../Helpers/AuthAtomObject';
import { useQuery, useMutation } from 'react-query';
import { createEventQuery, getOrgEventsQuery } from '../Queries/EventQueries';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';

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
    flexDirection: 'column',
    "& p": {
        textAlign: 'left'
    }
 }));

 const BoxedDivMap = styled('div')(()=>({
    textAlign: 'left',
    borderBottom: `1px solid ${ExtraPalette.c_253040}`
 }));

 const TypographyWrapper = styled(Typography)(()=>({
    display: 'flex',  
 }));

 
 const FormWrapper = styled('div')(()=>({ 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.5rem',
    margin:'0.3rem'
 }));

 const FormInput = styled('div')(()=>({
    margin:'0.3rem',
    '& input, select': { 
        display: 'block', 
    },
    '& label': {
        width: '100%',
        textAlign: 'left'
    }
 }));

const CreateEventComponent = () => {

    const [orgID, ] = useAtom(organisationIDAtom);  

    //Get all events from this Orgnaisation
    const {  data, status   } =  useQuery( "getOrgEvents", () =>getOrgEventsQuery(orgID), {
        enabled: !!orgID,
        refetchInterval: 500
    });

    const { register, handleSubmit,  formState: { errors }, reset } = useForm<ICreateEvent>();
 
    // placeholder/sample data from api
    const eventTeaser: IEventTypes[]  =  data?.data.organisationEvent;

    const checkBoolEventTeaser: boolean =  eventTeaser && eventTeaser.length > 0;

    const card = (
        <>
            {
                checkBoolEventTeaser ? eventTeaser.map((event, index) => {
                    return (
                        <div key={index}>
                            <BoxedDivMap key={index}>
                                <BoxedCardContent key={index}> 
                                        <Stack direction="row" spacing={1}> 
                                            <Chip label={event.date} /> 
                                        </Stack> 
                                    <TypographyWrapper variant="body2">
                                        <span>{event.title}</span>
                                    </TypographyWrapper>
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

      //Create event form
    const createMutation = useMutation(createEventQuery);

    const onSubmit = (data: ICreateEvent ) => { 
        if(data) { 
            createMutation.mutate(data); 
        } 
    }

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
                        <>
                            <FormWrapper>
                                <form onSubmit={handleSubmit(onSubmit)}>  
                                    <FormInput> 
                                        <input type={'hidden'} defaultValue={'1'} className='form-control'  {...register("active", { required: true })} />
                                        <input type={'hidden'} defaultValue={orgID} className='form-control'  {...register("organisation_id", { required: true })} />
                                    </FormInput>
                                    <FormInput>
                                        <label>Title</label>
                                        <input type={'text'} defaultValue="" className='form-control'  {...register("title", { required: true })} />
                                        {errors.title && <span className='error'>Title is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <label>Date</label>
                                        <input type={'date'}  defaultValue="" className='form-control'  {...register("date", { required: true })} />
                                        {errors.date && <span className='error'>Date is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <label>Description</label>
                                        <textarea  className='form-control' {...register("description", { required: true })} />
                                        {errors.description && <span className='error'>Description is required</span>}
                                    </FormInput>
                                    <FormInput>
                                        <input type="submit" className='btn btn-info' />
                                    </FormInput>
                                </form>
                            </FormWrapper>
                        </> 
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default CreateEventComponent