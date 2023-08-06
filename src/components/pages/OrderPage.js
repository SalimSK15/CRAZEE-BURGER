import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function OrderPage() {
   const location = useLocation();
   const prenom = location.state?.prenom || '';
   console.log("prenom : "+prenom);
   return (
      <div>
         
         <h1>Bonjour {prenom}</h1>
         <Link to="/LoginPage"><button>Déconnexion</button></Link>
      </div>
  )
}

export default OrderPage
