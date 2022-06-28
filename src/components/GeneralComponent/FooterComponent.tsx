import React from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import { chursterString } from '../../Helpers/stringHelper';
import {  useNavigate } from 'react-router-dom';
import { chursterLink } from '../../Helpers/routeHelper';

const FooterWrapper = styled(`div`)(({ color }) => ({ 
    diplay:'flex', 
    justifyContent: 'center',   
    flex: 0.5, 
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '19px', 
    color: color, 
    marginTop: '1.5rem', 
    textAlign: 'center', 
    "& span":{
        color: ExtraPalette.DarkBlueColor,
        cursor:'pointer'
    }
  }));

const FooterComponent = () => {  
   
    const navigate = useNavigate() 
    const currentYear = new Date().getFullYear();
 
    return  (<React.Fragment>  
                <FooterWrapper> 
                    <> <span onClick={()=> navigate(chursterLink.home)}> {chursterString.siteName} </span>  {chursterString.footer} {currentYear}</> 
                </FooterWrapper >
            </React.Fragment>);
}

export default FooterComponent;