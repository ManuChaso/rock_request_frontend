import './Login.css';

import googleIco from '../../assets/icons/googleIco.png';

export const Login = () => {

    const handleLogin = () => {
        window.location.href = 'http://localhost:3000/api/v1/users/login/google'
    }

    return(
        <>
            <button className="google-login" onClick={handleLogin}>
                <img src={googleIco} alt="Google icon" />
                Login with Google
            </button>
        </>
    )
}