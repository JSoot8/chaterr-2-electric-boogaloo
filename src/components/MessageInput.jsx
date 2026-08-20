// import { useState } from "react";
// import { chaterr } from "../index.js";

// import Input from "./Input";
// import Button from "./Button";
// import TypingIndicator from "./TypingIndicator";
// import { useChat } from "./ChatProvider.jsx";

// function MessageInput() {
//   const [text, setText] = useState("");
//   const [error, setError] = useState(null);
//   const { currentTypists, currentUser } = useChat();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!text) return;

//     try {
//       setError(null);
//       chaterr.sendMessage(text);
//       setText("");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleTextInput = (e) => {
//     setText(e.target.value);
//     chaterr.triggerTyping(currentUser);
//   };

//   return (
//     <div className="message-input">
//       <TypingIndicator>{currentTypists}</TypingIndicator>
//       <form onSubmit={handleSubmit} className="message-input__form">
//         {error && <span className="error-msg">{error}</span>}
//         <Input onChange={handleTextInput} value={text} />
//         <Button>Send</Button>
//       </form>
//     </div>
//   );
// }

// export default MessageInput;

import { useState } from "react";
import { chaterr } from "../index.js";

import Input from "./Input";
import Button from "./Button";
import TypingIndicator from "./TypingIndicator";
import { useChat } from "./ChatProvider.jsx";

function MessageInput() {
  const [text, setText] = useState("");
  const [error, setError] = useState(null);
  const { currentTypists, currentUser } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    try {
      setError(null);
      chaterr.sendMessage(text);
      setText("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleTextInput = (e) => {
    setText(e.target.value);
    chaterr.triggerTyping(currentUser);
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      {currentTypists[0] && <TypingIndicator>{currentTypists}</TypingIndicator>}
      {error && <span className="error-msg">{error}</span>}
      <Input onChange={handleTextInput} />
      <Button>Send</Button>
    </form>
  );
}

export default MessageInput;
