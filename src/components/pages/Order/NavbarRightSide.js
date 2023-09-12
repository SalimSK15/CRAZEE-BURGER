import React from 'react'
import { styled } from "styled-components";
import Profile from './Profile';


export default function NavbarRightSide({userName}) {
  return (
      <NavbarRightSidesStyled>
         <Profile username={userName}/>
      </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
   display: flex;
   align-items: center;
   padding-right: 50px;
`;