import React, { useContext } from 'react';
import { styled } from 'styled-components';
import Tab from '../../../../reusable-ui/Tab';
import {FiChevronDown, FiChevronUp} from "react-icons/fi";
import { AiOutlinePlus} from "react-icons/ai";
import { MdModeEditOutline} from "react-icons/md";
import { theme } from '../../../../../theme';
import OrderContext from '../../../../../context/OrderContext';

export default function AdminTabs() {

   const {
      isCollapsed,
      setIsCollapsed,
      isAddTabSelected,
      setIsAddTabSelected,
      isEditTabSelected,
      setIsEditTabSelected
   } = useContext(OrderContext);
 

   const selectTab = (tabSelected) =>{
      setIsCollapsed(false);

      // if(tabSelected==="add"){
      //    setIsAddTabSelected(true);
      //    setIsEditTabSelected(false);
      // }
      // if(tabSelected==="edit"){
      //    setIsEditTabSelected(true);
      //    setIsAddTabSelected(false);
      // }
      switch (tabSelected) {
         case "add":
            setIsAddTabSelected(true);
            setIsEditTabSelected(false);
            break;

         case "edit":
            setIsEditTabSelected(true);
            setIsAddTabSelected(false);
            break;
         default:
         break;
      }
        }

   return (
    <AdminTabsStyled>
      <Tab 
         label=""
         icon={ isCollapsed ? <FiChevronUp/> : <FiChevronDown />} 
         onClick={() => setIsCollapsed(!isCollapsed)} 
         className={isCollapsed ? "is-active" : ""}/>

      <Tab 
         label="Ajouter un produit"
         icon={ <AiOutlinePlus />} 
         onClick={() => selectTab("add")} 
         className={isAddTabSelected ? "is-active" : ""}/>

      <Tab 
         label="Modier un produit"
         icon={ <MdModeEditOutline />} 
         onClick={() => selectTab("edit")} 
         className={isEditTabSelected ? "is-active" : ""}/>
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled.div`
   display: flex;
   padding: 0 22px;

   .is-active{
      background: ${theme.colors.background_dark};
      color: ${theme.colors.white};
      border-color: ${theme.colors.background_dark};
      border-bottom: 2px;
   }
   button{
      margin-left: 1px;
   }
`;