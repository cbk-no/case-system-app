import './StartPage.css';


function login() {
  
}

export function StartPage() {
  return (
    <div className= "start-screen">
      <h1 className="title">Welcome to the Veridian Dynamics' Case System
        <h2 className="sub-title " >Pecuniam Coram Populo</h2>
        <button className="login-button" onClick={login}>
          Log in
        </button>
      </h1>
    </div>
  );
}
