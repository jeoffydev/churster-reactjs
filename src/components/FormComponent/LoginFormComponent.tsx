import React from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import Box from '@mui/material/Box'; 
import InputAdornment from '@mui/material/InputAdornment'; 
import TextField from '@mui/material/TextField'; 
import EmailIcon from '../../Icons/EmailIcon';
import Button from '@mui/material/Button';
import { PasswordIcon } from './../../Icons/PasswordIcon';
import { SubmitIcon } from './../../Icons/SubmitIcon';
import { chursterString } from '../../Helpers/stringHelper';


const BoxWrapper = styled(Box)(() => ({
    display:'flex',
    alignItems: 'center',
    marginBottom:"0.5rem",  
  }));

  
const TextFieldEmail = styled(TextField)(() => ({
    background: ExtraPalette.c_fff,
    border: `1px solid ${ExtraPalette.BlueColor}`, 
    borderRadius: '0.938rem',
    boxShadow: '12px 26px 50px rgba(90, 108, 234, 0.07)',
    "& .MuiOutlinedInput-root":{
        borderRadius: '0.938rem',
    },
    "& input, input:-internal-autofill-selected":{
        background: ExtraPalette.c_fff,
        backgroundColor: ExtraPalette.c_fff,
        WebkitBoxShadow: "0 0 0 1000px white inset"
    }, 
    "& input::placeholder":{
        fontSize:'0.813rem'
    },
    color: ExtraPalette.BodyColor,
    fontSize:'0.813rem !important'
  })); 

  const BoxWrapperExtension = styled(BoxWrapper)(() => ({ 
     justifyContent:'flex-end'
  }));

  const ButtonSubmit = styled(Button)(()=>({ 
    borderRadius: '0.938rem !important',
    padding:'0.7rem 1.5rem !important',
    background: `${ExtraPalette.DarkBlueColor} !important `,
    "& span":{
        display:'inline-block',
        padding: '0 0.4rem'
    }
  }));
 

const LoginFormComponent = () => {  
 
    return  (
            <React.Fragment>    
                <BoxWrapper>
                    <TextFieldEmail  
                            id="outlined-start-adornment"  
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                placeholder:'Username',
                                type:'email'
                            }}
                    />  
                </BoxWrapper> 
                <BoxWrapper>
                    <TextFieldEmail  
                            id="outlined-start-adornment"  
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PasswordIcon /></InputAdornment>,
                                placeholder:'Password',
                                type:'password'
                            }}
                    /> 
                </BoxWrapper>
                <BoxWrapperExtension>
                    <ButtonSubmit variant="contained"  >
                        <span>{chursterString.login}</span> <SubmitIcon />
                    </ButtonSubmit>
                </BoxWrapperExtension>
            </React.Fragment>
        );
}

export default LoginFormComponent;