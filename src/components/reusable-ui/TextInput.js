import React from 'react'
import { styled } from 'styled-components';
import { theme } from '../../theme';


function TextInput({value,onChange,Icon,...restProps}) {
  return (
      <InputStyled>
         {Icon && Icon}
         <input 
            onChange={onChange} 
            value={value } 
            {...restProps}
            type="text" 
        />
      </InputStyled>
  )
}

export default TextInput

const InputStyled = styled.div`
   background-color: #FFFFFF;
   border-radius: ${theme.borderRadius.round};
   display: flex;
   align-items: center;
   padding: 18px 24px;
   margin: 18px 0;
   
   .icon{
      font-size: ${theme.fonts.size.SM};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }
    input{
      border: none;
      font-size: ${theme.fonts.size.SM};
      color: ${theme.colors.dark};
      width: 100%;

      &::placeholder{
        background: ${theme.colors.white};
        color: ${theme.colors.greyMedium};
      }
    }
    
`;