import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./StartPage.css";
import { useAuth0 } from "@auth0/auth0-react";

export function StartPage() {
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
    <div className="start-screen">
      <h1 className="title">
        Welcome to the Veridian Dynamics' Case System
        <h2 className="sub-title ">Pecuniam Coram Populo</h2>
        {isAuthenticated ? (
          <div className="welcome-message">
            <p>Your trusted partner in case management.</p>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </h1>
    </div>
  );
}
