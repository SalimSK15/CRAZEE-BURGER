import React, { useState } from 'react'
import { styled } from "styled-components";
import { theme } from '../../../theme';
import Main from './Main/Main';
import Navbar from './Navbar/Navbar';
import OrderContext from '../../../context/OrderContext';

function OrderPage() {
  //state 
  const [isModAdmin,setIsModeAdmin] = useState(false);
  const [isCollapsed,setIsCollapsed] = useState(false)
  const [isEditTabSelected,setIsEditTabSelected] = useState(false);
  const [isAddTabSelected,setIsAddTabSelected] = useState(true);

  const OrderContextValue = {
    isModAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    isEditTabSelected,
    setIsEditTabSelected,
    isAddTabSelected,
    setIsAddTabSelected,
  }
  return (
    <OrderContext.Provider value={OrderContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar  />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
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