import { NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import '../styles/main.css';
import '../styles/authentication.css';
import AuthError from '../components/AuthError';
import AuthHeader from '../components/AuthHeader';

const DATA_DUMMY = 'admin';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!username.trim() || !password.trim()) {
            setErrorLogin(false);
            return;
        }

        const credsAreValid = username.trim() === DATA_DUMMY && password.trim() === DATA_DUMMY;

        setErrorLogin(!credsAreValid);

        if (credsAreValid) {
            navigate('/home');
        }
    };

    const handleUsername = (e) => {
        setUsername(e.target.value.trim());
    };

    const handlePassword = (e) => {
        setPassword(e.target.value.trim());
    };

    const handleShowPassword = () => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };

    return (
        <div className="auth-page login-page">
            <main className="auth-card">
                {/* <img
                    src="../assets/images/chill-app-logo.svg"
                    className="logo"
                    alt="chill-app-logo"
                />

                <div className="welcome">
                    <h1>Masuk</h1>
                    <p>Selamat datang kembali!</p>
                    <AuthError showError={errorLogin} />
                </div> */}
                <AuthHeader
                    title={'Masuk'}
                    greeting={'Selamat datang kembali!'}
                    isError={errorLogin}
                />

                <form onSubmit={handleFormSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required={true}
                            placeholder="Masukkan username"
                            onChange={handleUsername}
                        />

                        <span
                            className="body-small-regular error-label"
                            style={{ display: submitted && !username.trim() ? 'block' : 'none' }}
                        >
                            Username is required
                        </span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Kata Sandi</label>
                        <input
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Masukkan kata sandi"
                            required={true}
                            onChange={handlePassword}
                        />
                        <span
                            className="body-small-regular error-label"
                            style={{ display: submitted && !password.trim() ? 'block' : 'none' }}
                        >
                            Password is required
                        </span>

                        <img
                            src="../assets/images/eye-off.svg"
                            alt="eye-off"
                            className="form-group__icon"
                            onClick={handleShowPassword}
                        />
                        <div className="form-links">
                            <p>
                                Sudah terdaftar? <NavLink to="/register">Daftar</NavLink>
                            </p>
                        </div>
                    </div>

                    <div className="auth-action">
                        <button type="submit">Masuk</button>
                        <p>Atau</p>

                        <button type="button">
                            <img src="../assets/images/google-logo.svg" alt="google-logo" /> Masuk
                            dengan Google
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
