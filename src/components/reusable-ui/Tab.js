import React from 'react'
import styled  from 'styled-components';
import { theme } from '../../theme';

export default function Tab({label, icon, onClick, className }) {
  return (
    <TabStyled onClick={onClick} className={className}>
      <div className='icon'>{icon}</div>
      {label && <span className='label'>{label }</span>}
    </TabStyled>
  );
}
const TabStyled = styled.button`
   height: 43px;
   padding: 0 22px;

   cursor: pointer;

   position: relative;
   left: 5%;
   top: 1px;

   display: flex;
   justify-content: center;
   align-items: center;

   font-size: ${theme.fonts.size.P0};
   color: ${theme.colors.greySemiDark};

   background: ${theme.colors.white};
   box-shadow: ${theme.shadows.subtle};

   border-width: 1px 1px 2px 1px;
   border-style: solid;
   border-color: ${theme.colors.greyLight};

   border-radius: ${theme.borderRadius.round};
   border-bottom-right-radius: 0px;
   border-bottom-left-radius: 0px;

   &:hover {
      border-bottom: 2px solid ${theme.colors.white}; 
      text-decoration: underline;
   }
   .icon{
      display: flex;
   }
   .label{
      margin-left: 13px;
   }
`;