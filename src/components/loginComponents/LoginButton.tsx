import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton: React.FC<{ isOnNavbar?: boolean }> = ({ isOnNavbar = false }) => {

  const { loginWithRedirect } = useAuth0();
  return (
    <button 
      onClick={() => loginWithRedirect()} 
      className= {isOnNavbar ? "login-button-navbar" : "login-button"}
    >
      Log In
    </button>
  );
};

export default LoginButton;