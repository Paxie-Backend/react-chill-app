export default function AuthError({showError}) {
    return (
        <span
            className="body-small-regular error-label"
            style={{ display: showError ? 'block' : 'none' }}
        >
            Invalid username/password
        </span>
    );
}
