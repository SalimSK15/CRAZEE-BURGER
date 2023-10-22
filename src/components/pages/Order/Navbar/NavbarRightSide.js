import React, { useContext, useState } from 'react';
import { styled } from "styled-components";
import Profile from './Profile';
import ToggleButton from '../../../reusable-ui/ToggleButton';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserSecret} from "react-icons/fa6";
import { toast } from 'react-toastify';
// import ToastAdmin from './ToastAdmin';
import OrderContext from '../../../../context/OrderContext';

export default function NavbarRightSide() {
   
   const {isModAdmin,setIsModeAdmin} = useContext(OrderContext)

   const displayToastNotification = () => {
      if(!isModAdmin){
         toast.info("Mode admin activé", {
         icon: <FaUserSecret size={30} />,
         theme: "dark",
         position: "bottom-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: false,
         draggable: true,
         progress: undefined,
         })
      }
      setIsModeAdmin(!isModAdmin);
      
   }
      
;
   return (
      <NavbarRightSidesStyled>
         <ToggleButton 
            isChecked={isModAdmin}
            onToggle={displayToastNotification}
            labelIfUnchecked={"activer LE MODE ADMIN"}
            labelIfChecked={"DÉsactiver le mode admin"}
         />
         <Profile />
      </NavbarRightSidesStyled>
  )
}

const NavbarRightSidesStyled = styled.div`
   display: flex;
   align-items: center;
   padding-right: 50px;

`;