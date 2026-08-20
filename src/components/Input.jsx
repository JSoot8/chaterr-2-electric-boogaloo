function Input({ onChange, value }) {
  return (
    <input
      type="text"
      onChange={onChange}
      className="input"
      placeholder="Say Something"
      value={value}
    ></input>
  );
}

export default Input;
