import React, { useContext, useState } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import AdminTabs from './AdminTabs';
import AdminPanel from './AdminPanel';
import OrderContext from '../../../../../context/OrderContext';

export default function Admin() {

  const {isCollapsed} = useContext(OrderContext);
   
  return (
   <AdminStyled >
      <AdminTabs />
      {!isCollapsed &&  <AdminPanel />}
   </AdminStyled>
  )
}

const AdminStyled = styled.div`c  
   // background: red;
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
`;