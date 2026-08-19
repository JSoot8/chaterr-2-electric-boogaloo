import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState("Hudie");
  const [currentTypists, setCurrentTypists] = useState([]);
  const channelRef = useRef(null);
  const typingTimeoutsRef = useRef({});

  const addTyping = useCallback(
    (theOneWhoTypes) => {
      setCurrentTypists((typists) =>
        typists.includes(theOneWhoTypes)
          ? typists
          : [...typists, theOneWhoTypes],
      );

      if (typingTimeoutsRef.current[theOneWhoTypes])
        clearTimeout(typingTimeoutsRef.current[theOneWhoTypes]);

      typingTimeoutsRef.current[theOneWhoTypes] = setTimeout(() => {
        setCurrentTypists(
          currentTypists.filter((typist) => {
            return !(typist === theOneWhoTypes);
          }),
        );
      }, 3000);
    },
    [currentTypists],
  );

  const postTyping = () => {
    channelRef.current?.postMessage({
      type: "NEW_TYPING",
      payload: currentUser,
    });
  };

  const addMessage = (msg) => {
    setMessages((prevMsgs) => [...prevMsgs, msg]);

    const msgWithSender = {
      sender: currentUser,
      content: msg.content,
      id: msg.id,
      timestamp: msg.timestamp,
    };

    channelRef.current?.postMessage({
      type: "NEW_MESSAGE",
      payload: msgWithSender,
    });
  };
  useEffect(() => {
    const channel = new BroadcastChannel("chat-channel");
    channelRef.current = channel;

    channel.onmessage = (e) => {
      const { type, payload } = e.data;

      if (type === "NEW_MESSAGE")
        setMessages((prevMsgs) => [...prevMsgs, payload]);

      if (type === "NEW_TYPING") addTyping(payload);
    };

    return () => {
      channel.close();
    };
  }, [currentUser, addTyping]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
        currentUser,
        postTyping,
        currentTypists,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}
