 
import { useAuthUser,   useIsAuthenticated, useAuthHeader  } from 'react-auth-kit'
import {useNavigate} from 'react-router-dom';  
import AdminLayoutComponent from './GeneralComponent/AdminLayoutComponent';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { ExtraPalette } from '../Helpers/constant';
import Typography from '@mui/material/Typography';
import { chursterString } from '../Helpers/stringHelper';

const Item = styled(Paper)(() => ({
    backgroundColor: ExtraPalette.c_fff,
    padding: '1rem',
    textAlign: 'center',
  }));

 const BoxWrapper = styled(Box)(()=>({
    flexGrow: 1
 }) );

const SecureComponent = () => { 
    const authUser = useAuthUser()
    const isAuthenticated = useIsAuthenticated()
    const navigate = useNavigate()
    const authHeader = useAuthHeader() 

    console.log("AUTH ", authUser())
    console.log("isAuthenticated ", isAuthenticated())
    console.log("authHeader ", authHeader())
 
    
    return (  
        <AdminLayoutComponent> 
            <p> <button onClick={()=>{navigate("/create-event")}}>Go to create event</button></p>

            <BoxWrapper>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="h5" component="div" gutterBottom>
                                {chursterString.members}
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="h5" component="div" gutterBottom>
                                {chursterString.services}
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>
                            <Typography variant="h5" component="div" gutterBottom>
                                {chursterString.departments}
                            </Typography>
                        </Item>
                    </Grid>
                   
                </Grid>
            </BoxWrapper>  
        </AdminLayoutComponent> 
    )
}

export default SecureComponent