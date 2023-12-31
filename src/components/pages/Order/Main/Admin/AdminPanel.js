import React, { useContext } from 'react'
import { styled } from 'styled-components';
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminPanel() {

  const {
    isCollapsed,
    setIsCollapsed,
    isAddTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    setIsEditTabSelected
 } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      {isAddTabSelected && "Ajouter un produit"}
      {isEditTabSelected && "Modifier un produit"}
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
   border: 1px solid red;
   height: 250px;
   background: ${theme.colors.white};
   border: 1px solid ${theme.colors.greyLight};
   box-shadow: ${theme.shadows.subtle};
`;