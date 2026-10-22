export default function AuthPasswordField({ children, props }) {
  const {
    handleShowPassword,
    handlePassword,
    id,
    name,
    type,
    placeholder,
    submitted,
    password,
    errorMsg,
  } = props;

  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        required={true}
        placeholder={placeholder}
        onChange={handlePassword}
      />

      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !password.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
      <img
        src="../assets/images/eye-off.svg"
        alt="eye-off"
        className="form-group__icon"
        onClick={handleShowPassword}
      />
      {children}
    </>
  );
}
