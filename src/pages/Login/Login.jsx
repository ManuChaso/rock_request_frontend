import "./Login.css";

import googleIco from "../../assets/icons/googleIco.png";

export const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://google.com";
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <h1>Rock Request</h1>
        <p>Login to access to your account</p>
        <button className="google-login" onClick={handleLogin}>
          <img src={googleIco} alt="Google icon" />
          Login with Google
        </button>
      </div>
    </main>
  );
};
