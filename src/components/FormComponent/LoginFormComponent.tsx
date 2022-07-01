import React, {useState} from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import Box from '@mui/material/Box';    
import EmailIcon from '../../Icons/EmailIcon';
import Button from '@mui/material/Button';
import { PasswordIcon } from './../../Icons/PasswordIcon';
import { SubmitIcon } from './../../Icons/SubmitIcon';
import { chursterString } from '../../Helpers/stringHelper';
import { useForm,  SubmitHandler } from "react-hook-form";
import { ILoginForm } from './../../Types/chursterType';
import ChursterInputBoxComponent from './ChursterInputBoxComponent';
import { GetLogin } from '../../Queries/LoginQueries';
import { useQuery, useMutation } from "react-query";

const BoxWrapper = styled(Box)(() => ({
    display:'flex',
    alignItems: 'center',
    marginBottom:"0.5rem",  
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
    const [userLogin, setUserLogin] = useState<ILoginForm>({
        email: "",
        password: ""
    });
    const [enableLogin, setEnableLogin] = useState(false);
    const { handleSubmit, control } = useForm<ILoginForm>();

     const loginStatus = useQuery(['login', userLogin],  ()=>GetLogin(userLogin), {
        enabled: enableLogin,
      });
      console.log("LOGIN STAT ", loginStatus)
      console.log("enableLogin ", enableLogin)
  
    const onSubmit: SubmitHandler<ILoginForm> = data => {
        //console.log(data)
        setEnableLogin(true);
        setUserLogin(data);
    }

    return  (
            <React.Fragment>   
                <form onSubmit={handleSubmit(onSubmit)}>
                    <BoxWrapper>
                        <ChursterInputBoxComponent 
                              name ={"email"}
                              type={"email"}
                              control={control}
                              required = {true}
                              placeholder="Username"
                              errorMessage={chursterString.emailRequired}
                              defaultValue={""}
                         ><EmailIcon /></ChursterInputBoxComponent>
 
                    </BoxWrapper> 
                    <BoxWrapper>
                        <ChursterInputBoxComponent 
                              name ={"password"}
                              type={"password"}
                              control={control}
                              required = {true}
                              placeholder="Password"
                              errorMessage={chursterString.passwordRequired}
                              defaultValue={""}
                         ><PasswordIcon /></ChursterInputBoxComponent> 

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