export default function AuthError({isError}: Readonly<{isError: boolean}>) {
    return (
        <span
            className="body-small-regular error-label"
            style={{ display: isError ? 'block' : 'none' }}
        >
            Invalid username/password
        </span>
    );
}
