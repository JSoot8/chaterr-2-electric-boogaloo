function Input({ onChange }) {
  return (
    <input
      type="text"
      onChange={onChange}
      className="input"
      placeholder="Say Something"
    ></input>
  );
}

export default Input;
