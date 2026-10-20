import '../styles/authentication.css';
import '../styles/main.css';

import AuthError from './AuthError';

export default function AuthHeader({ title, greeting, isError }) {
    return (
        <>
            <img className="logo" src='assets/images/chill-app-logo.svg' alt="chill-app-logo" />
            <div className="welcome">
                <h1>{title}</h1>
                <p>{greeting}</p>
                <AuthError isError={isError} />
            </div>
        </>
    );
}
