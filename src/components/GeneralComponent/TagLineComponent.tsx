import React from 'react'  
import { ExtraPalette } from '../../Helpers/constant'; 
import styled from "styled-components"; 
import { chursterString } from '../../Helpers/stringHelper';
 

const TagWrapper = styled(`div`)(({ color }) => ({
    fontWeight: '400',
    fontSize: '0.875rem',
    lineHeight: '19px', 
    color: color,
    width: '100%',
    marginTop: '1rem'
  }));

const TagLineComponent = () => {  
 
    return  (<React.Fragment>  
                <TagWrapper color={ExtraPalette.BodyColor} > 
                    {chursterString.tagline}
                </TagWrapper >
            </React.Fragment>);
}

export default TagLineComponent;