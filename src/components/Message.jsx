import { memo } from "react";
import { splitTextWithLinks } from "../helpers";

const SENDER_COLORS = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * SENDER_COLORS.length);
  return SENDER_COLORS[randomIndex];
};

function Message({ children, sender, timestamp }) {
  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const randomColor = getRandomColor();

  const content = splitTextWithLinks(children);

  const isUser = sender === "Me";

  return (
    <div className={isUser ? "message message--user" : "message"}>
      <span
        className="message--sender"
        style={{ "--sender-color": randomColor }}
      >
        {isUser ? "" : sender}
      </span>

      <p>
        {content.map((str, index) => (
          <span key={index}>
            {str.isLink ? (
              <a href={str.href} target="_blank" rel="noopener noreferrer">
                {str.text}
              </a>
            ) : (
              str.text
            )}
            {str.hasSpace && " "}
          </span>
        ))}
      </p>
      <span className="message--time-stamp">{formattedTime}</span>
    </div>
  );
}

export default memo(Message);
