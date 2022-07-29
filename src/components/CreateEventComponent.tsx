 

import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

 const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }) );

const CreateEventComponent = () => {
    return (
        <AdminLayoutComponent> 
            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            ITEM HERE 
                        </Item>
                    </Grid>
                    
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default CreateEventComponent