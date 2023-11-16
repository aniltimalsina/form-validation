const InputField = ({ label, name, type, value, onChange, error }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type || "text"}
        id={name}
        name={name}
        value={value}
        onChange={handleInputChange}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default InputField;
