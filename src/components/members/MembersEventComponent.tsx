 
 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import { chursterString } from '../../Helpers/stringHelper';
import { ExtraPalette } from '../../Helpers/constant';

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


const MembersEventComponent = () => {


    return (
        <> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.upcomingEvent}
                            </HeadingTypography> 
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <HeadingTypography>
                                {chursterString.myEvent}
                            </HeadingTypography>
                        </Item>
                    </Grid>
                </Grid>
            </BoxWrapper>  
        </> 
    )
}

export default MembersEventComponent