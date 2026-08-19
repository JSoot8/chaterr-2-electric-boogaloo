import Message from "./Message";

function Chat({ msgArr }) {
  return (
    <div className="chat">
      {msgArr.map((msg) => {
        return (
          <Message key={msg.id} sender={msg.sender} timestamp={msg.timestamp}>
            {msg.content}
          </Message>
        );
      })}
    </div>
  );
}

export default Chat;
