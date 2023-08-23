import React, { useState } from 'react'
import { useNavigate   } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { IoChevronForward} from "react-icons/io5";
import { theme } from '../../../theme';

export default function LoginForm() {
    //state
   const [prenom, setPrenom] = useState("");
   const navigate   = useNavigate();

   // comporetement 
   const handleSubmit = (e) => {
     e.preventDefault();
     navigate( `/order/${prenom}`)
   }
   const handleChange = (e) => {
     setPrenom(e.target.value); 
   }
  // affichage (render)

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>
      <TextInput 
      value={prenom} 
      onChange={handleChange}
      placeholder={"Entrer votre prénom"} 
      Icon={<BsPersonCircle className="icon" />}
      required
      />
      <PrimaryButton 
        label={"Accéder à votre espace"} 
        Icon={ <IoChevronForward 
          className="icon"/>}
      />
    </LoginFormStyled>
  )
}
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr{
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  h1{
    color: white;
    font-size: ${theme.fonts.size.P5};
  }
  h2{
    margin: 20px 10px 10p;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;