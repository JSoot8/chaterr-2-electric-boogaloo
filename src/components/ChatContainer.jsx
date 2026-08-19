import { chaterr } from "../index.js";
import { useEffect } from "react";

import Chat from "./Chat";
import MessageInput from "./MessageInput";
import { useChat } from "./ChatProvider.jsx";

function ChatContainer() {
  const { messages, addMessage, postTyping, currentUser } = useChat();

  useEffect(() => {
    const handleSendMessage = (msg) => {
      addMessage(msg);
    };

    const handleTyping = () => {
      postTyping(currentUser);
    };

    const removeMessageListener = chaterr.onMessage(handleSendMessage);
    const removeTypingListener = chaterr.onTyping(handleTyping);

    return () => {
      removeMessageListener();
      removeTypingListener();
    };
  }, [addMessage, postTyping, currentUser]);

  return (
    <main className="chat-wrapper">
      <Chat msgArr={messages} />
      <MessageInput />
    </main>
  );
}

export default ChatContainer;
