import { useAuth0 } from "@auth0/auth0-react";
import "./LogoutButton.css";

const LogoutButton: React.FC<{ isOnNavbar: boolean }> = ({ isOnNavbar }) => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className={isOnNavbar ? "logout-button-navbar" : "logout-button"}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;