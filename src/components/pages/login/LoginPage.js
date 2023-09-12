import { styled } from "styled-components";
import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage() {


  const handleLogoClick = () => {
    window.location.reload();
  }

  // affichage (render)
  return (
    <LoginPageStyled>
      <Logo className="logo-login-page" onClick={handleLogoClick}/>
      <LoginForm />
    </LoginPageStyled>
  )
}
const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before{
    content: "";
    background: url("/images/F03-burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    inset: 0px;
    // top: 0;
    // left: 0;
    // right: 0;
    // bottom: 0;
    z-index: -1;
  }
  .logo-login-page{
    transform: scale(2.5);
  }
`