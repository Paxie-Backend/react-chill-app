export default function AuthPasswordField({ children, ...props }) {
  const { handleShowPassword, submitted, errorMsg, ...resProps } = props;
  return (
    <>
      <input {...resProps} />
      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !resProps.value.trim() ? "block" : "none",
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
