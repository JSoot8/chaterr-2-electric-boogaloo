function TypingIndicator({ children }) {
  return (
    <span className="typing-indicator">
      {children.length > 1
        ? children.join(", ") + " are typing..."
        : children + " is typing..."}
    </span>
  );
}

export default TypingIndicator;
