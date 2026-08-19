function TypingIndicator({ children }) {
  return (
    <span className="typing-indicator">
      {children[0] && children + " is typing..."}
    </span>
  );
}

export default TypingIndicator;
