 
 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles'; 
import Typography from '@mui/material/Typography'; 
import { chursterString } from '../Helpers/stringHelper';
import { ExtraPalette } from '../Helpers/constant';
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';

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


const OrganisationComponent = () => {


    return (
        <> 
            <AdminLayoutComponent> 
                <BoxWrapper>
                    <Grid container spacing={2}> 
                        <Grid item xs={12}>
                            <Item>
                                <HeadingTypography>
                                    {chursterString.allOrganisations}
                                </HeadingTypography> 
                            </Item>
                        </Grid>
                    </Grid>
                </BoxWrapper>  
            </AdminLayoutComponent>
        </> 
    )
}

export default OrganisationComponent