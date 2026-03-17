import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../components/loginComponents/LoginButton";
import LogoutButton from "../../components/loginComponents/LogoutButton";
import "./StartPage.css";

const StartPage: React.FC = () => {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="start-screen">
        <div className="loading-text">Loading...</div>;
      </div>
    );
  }

  if (error) {
    return (
      <div className="start-screen">
        <div className="error-text">Error: {error.message}</div>;
      </div>
    );
  }
  return (
    <>
      <div className="start-screen">
        <h1 className="title">
          Welcome to the Veridian Dynamics' Case System
          <p className="sub-title ">Pecuniam Coram Populo</p>
          {isAuthenticated ? (
            <div className="welcome-message">
              <p>Your trusted partner in case management.</p>
              <LogoutButton isOnNavbar={false} />
            </div>
          ) : (
            <LoginButton isOnNavbar={false} />
          )}
        </h1>
      </div>
    </>
  );
}

export default StartPage;