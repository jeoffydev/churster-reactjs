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
import { ILoginForm } from './../../Types/chursterType';
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
    type: string;
    control: Control<any>;
    required: boolean;
    placeholder?: string;
    errorMessage?: string;
    defaultValue?: string;
}

const ChursterInputBoxComponent = ( props: IProps)  => {
    const { name, type, control, defaultValue, required, placeholder, errorMessage } = props;
    return  (
        <React.Fragment>

                    <Controller
                        name={name}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Testing required" }}
                        render={({
                                     field: { onChange, value},
                                     fieldState: { error }
                                 }) => ( <ChursterTextField
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

            </React.Fragment>
    );
}

export default ChursterInputBoxComponent;