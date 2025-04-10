import './Login.css';

import googleIco from '../../assets/icons/googleIco.png';

export const Login = () => {

    const handleLogin = () => {
        window.location.href = 'https://google.com'
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