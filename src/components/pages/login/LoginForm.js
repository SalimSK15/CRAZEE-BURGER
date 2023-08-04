import React, { useState } from 'react'

export default function LoginForm() {
    //state
   const [prenom, setPrenom] = useState("");
   
   // comporetement
   const handleSubmit = (e) => {
     e.preventDefault();
     alert(`Bonjour ${prenom}`)
     setPrenom("")

   }
   const handleChange = (e) => {
     setPrenom(e.target.value); 
   }
  // affichage (render)

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input onChange={handleChange} value={prenom } type="text" placeholder="Entre votre prenom ..." required/>
      <button>Accedez a votre espace</button>
    </form>
  )
}
