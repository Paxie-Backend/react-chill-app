export default function AuthTextField(props) {
  const { submitted, errorMsg, ...resProps } = props;
  return (
    <>
      <input {...resProps} />

      <span
        className="body-small-regular error-label"
        style={{
          display: submitted && !resProps.value?.trim() ? "block" : "none",
        }}
      >
        {errorMsg}
      </span>
    </>
  );
}
