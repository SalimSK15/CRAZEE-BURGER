import { createContext } from "react";

export default createContext({
   isModAdmin: false,
   setIsModeAdmin: ()=>{},

   isCollapsed: false,
   setIsCollapsed: ()=>{},
   isEditTabSelected: false,
   setIsEditTabSelected: ()=>{},
   isAddTabSelected: false,
   setIsAddTabSelected: ()=>{},
})