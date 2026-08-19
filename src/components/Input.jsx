function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="input"
      placeholder="Say Something"
    ></input>
  );
}

export default Input;
