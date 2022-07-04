import React  from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SideBarComponent from './SideBarComponent';

const Item = styled(Paper)(({ theme }) => ({  
    padding: theme.spacing(1.5),
    textAlign: 'left', 
    height: '100%', 
    backgroundColor:'rgba(255,255,255,0.75)'
  }));
 

interface IProps{
    children?:  React.ReactNode
};

const AdminLayoutComponent = (props: IProps) => { 
    
    const { children  } = props;
    
    return ( 
        <Box>
            <Grid container spacing={1}> 
                <Grid item xs={2}>
                    <Item>
                        <SideBarComponent />
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        {children} 
                    </Item>
                </Grid>
            </Grid>
        </Box> 
    )
}

export default AdminLayoutComponent;