export default function AuthTextField({ props }) {
  const {
    handleUsername,
    id,
    name,
    type,
    placeholder,
    submitted,
    username,
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
        onChange={handleUsername}
      />

      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !username.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
    </>
  );
}
