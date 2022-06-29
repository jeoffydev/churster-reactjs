import React, { SVGProps } from 'react'
import { ExtraPalette } from '../../Helpers/constant';
import styled from "styled-components"; 
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import EmailIcon from '../../Icons/EmailIcon'; 
import {   Control, Controller } from "react-hook-form";



const ChursterTextField  = styled(TextField)(() => ({
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


interface IProps{
    name: string;
    type: string | undefined;
    control: Control<any>;
    required?: boolean;
    placeholder?: string | undefined;
    errorMessage?: string | undefined;
    defaultValue?: string; 
    icon?: SVGProps<SVGSVGElement> | null;
    children?:  React.ReactNode;
}

const ChursterInputBoxComponent = ( props: IProps)  => {
    const { name, type, control, defaultValue, required, placeholder, errorMessage, icon, children,  ...otherProps } = props;

    const isRequired = required ? errorMessage : false; 

    return  (
        <React.Fragment>

                    <Controller
                        name={name}
                        control={control}
                        defaultValue= {defaultValue}
                        rules={{ required: isRequired }}
                        render={({
                                    field: { onChange, value},
                                    fieldState: { error }
                                 }) => ( 
                                 <ChursterTextField
                                    onChange={onChange}
                                    value={value}
                                    id="outlined-start-adornment"
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">  {children}  </InputAdornment>,
                                        placeholder: placeholder,
                                        type: type
                                    }}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    {...(otherProps as any)}
                                />
                        )}
                    />

            </React.Fragment>
    );
}

export default ChursterInputBoxComponent;