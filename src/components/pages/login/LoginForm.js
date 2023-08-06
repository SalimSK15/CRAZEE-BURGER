import React, { useState } from 'react'
import { Link, useNavigate   } from 'react-router-dom';

export default function LoginForm() {
    //state
   const [prenom, setPrenom] = useState("");
   const navigate   = useNavigate();

   // comporetement
   const handleSubmit = (e) => {
     e.preventDefault();
     navigate( "/OrderPage",{state: {prenom}})
   }
   const handleChange = (e) => {
     setPrenom(e.target.value); 
   }
  // affichage (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input onChange={handleChange} value={prenom } type="text" placeholder="Entrez votre prénom ..." required/>
      <button>Accédez à votre espace</button>
      <Link to="/order">Vers OrderPage</Link>
    </form>
  )
}
