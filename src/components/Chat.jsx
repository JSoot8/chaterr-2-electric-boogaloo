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

// [1, 2, 3]
// const toilet = skibidi.map((num) => {
//return num + 1
//})

// toilet =
