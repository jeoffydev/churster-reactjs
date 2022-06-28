import React from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import { chursterString } from '../../Helpers/stringHelper';
 

const FooterWrapper = styled(`div`)(({ color }) => ({
    diplay:'flex',
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '19px', 
    color: color,
    width: '100%',
    marginTop: '1rem',
    border:'1px solid #ff0000',
    textAlign: 'center',
  
  }));

const FooterComponent = () => {  
 
    return  (<React.Fragment>  
                <FooterWrapper> 
                    {chursterString.tagline}
                </FooterWrapper >
            </React.Fragment>);
}

export default FooterComponent;