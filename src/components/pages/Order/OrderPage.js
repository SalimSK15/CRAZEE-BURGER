import React from 'react'
import {useParams } from 'react-router-dom'
import { styled } from "styled-components";
import Navbar from './Navbar';
import Main from './Main';
import { theme } from '../../../theme';

function OrderPage() {
  //state 
  const {userName} = useParams();
  
  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar userName={userName} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

export default OrderPage

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .container{
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;