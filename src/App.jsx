import "./App.css";

import PageContainer from "./components/PageContainer";
import ChatContainer from "./components/ChatContainer";
import MessageInput from "./components/MessageInput";
import { ChatProvider } from "./components/ChatProvider";

function App() {
  return (
    <ChatProvider>
      <PageContainer>
        <ChatContainer>
          <MessageInput />
        </ChatContainer>
      </PageContainer>
    </ChatProvider>
  );
}

export default App;
