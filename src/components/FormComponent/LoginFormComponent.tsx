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
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ILoginForm } from './../../Types/chursterType';

const BoxWrapper = styled(Box)(() => ({
    display:'flex',
    alignItems: 'center',
    marginBottom:"0.5rem",  
  }));

  
const TextFieldLogin = styled(TextField)(() => ({
    border: `1px solid ${ExtraPalette.BlueColor}`, 
    borderRadius: '0.938rem',
    boxShadow: '12px 26px 50px rgba(90, 108, 234, 0.07) !important',
    "& .MuiOutlinedInput-root":{
        borderRadius: '0.938rem',
        background: ExtraPalette.c_fff,
    },
    "& input":{
        borderTopRightRadius: '0.938rem',
        borderBottomRightRadius: '0.938rem',
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
    border: `1px solid ${ExtraPalette.GreenColor} !important`,
    "& span":{
        display:'inline-block',
        padding: '0 0.4rem'
    }
  }));
 


const LoginFormComponent = () => {  
    const { handleSubmit, control } = useForm<ILoginForm>();
  
    const onSubmit: SubmitHandler<ILoginForm> = data => {
        console.log(data)
    };

    return  (
            <React.Fragment>   
                <form onSubmit={handleSubmit(onSubmit)}>
                    <BoxWrapper>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{ required: chursterString.emailRequired }}
                            render={({
                                field: { onChange, value},
                                fieldState: { error }
                              }) => ( <TextFieldLogin  
                                        onChange={onChange} 
                                        value={value}
                                        id="outlined-start-adornment"   
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment>,
                                            placeholder:'Username',
                                            type:'email'
                                        }}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    /> 
                                )}
                            />
                    </BoxWrapper> 
                    <BoxWrapper>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{ required: chursterString.passwordRequired }}
                            render={({
                                field: { onChange, value},
                                fieldState: { error }
                              }) => ( <TextFieldLogin 
                                        onChange={onChange} 
                                        value={value}
                                        id="outlined-start-adornment"   
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><PasswordIcon /></InputAdornment>,
                                            placeholder:'Password',
                                            type:'password'
                                        }}
                                        error={!!error}
                                        helperText={error ? error.message : null}
                                    /> 
                                )}
                            />

                        
                    </BoxWrapper>
                    <BoxWrapperExtension>
                        <ButtonSubmit type='submit' variant="contained"  >
                            <span>{chursterString.login}</span> <SubmitIcon />
                        </ButtonSubmit>
                    </BoxWrapperExtension>
                </form> 
            </React.Fragment>
        );
}

export default LoginFormComponent;