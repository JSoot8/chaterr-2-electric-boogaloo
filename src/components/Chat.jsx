import Message from "./Message";

function Chat({ msgArr }) {
  return (
    <section className="chat">
      {msgArr.map((msg) => {
        return (
          <Message key={msg.id} sender={msg.sender} timestamp={msg.timestamp}>
            {msg.content}
          </Message>
        );
      })}
    </section>
  );
}

export default Chat;
