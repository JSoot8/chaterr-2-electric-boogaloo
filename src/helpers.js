export const subscribeToExternalMessages = (chaterr) => {
  const externalMessages = [
    generateMessage("Noi", "Hey, how are you?"),
    generateMessage("Noi", "I prefer backend to be honest"),
    generateMessage("Moshe", "Good luck!"),
    generateMessage("Moshe", "Please think out loud :)"),
    generateMessage("Dan", "React is awesome"),
    generateMessage("Dan", "You may not need Redux"),
    generateMessage("Ofir", "CSS is nice"),
    generateMessage("Ofir", "HTML too"),
    generateMessage("Dolev", "JavaScript is my passion!"),
    generateMessage("Dolev", "Design patterns are useful"),
    generateMessage("Mike", "Come with me to JS conf?"),
    generateMessage("Mike", "ReactNext works too"),
    generateMessage("Rauch", "Black is my favorite color"),
    generateMessage("Rauch", "Triangle is my favotire shape"),
  ];

  externalMessages.forEach((message) => initiateMessage(chaterr, message));
};

async function initiateMessage(chaterr, message) {
  await sleep(1000 * randomIntFromInterval(1, 60));

  chaterr.triggerTyping(message.sender);

  await sleep(1000 * randomIntFromInterval(1, 60));

  const { content, ...metadata } = message;
  chaterr.sendMessage(content, metadata);
}

export const fiftyFifty = () => Math.random() > 0.5;
export const uuid = () => crypto.randomUUID();

function generateMessage(sender, content) {
  return {
    content,
    sender,
    id: uuid(),
    timestamp: Date.now(),
  };
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const URL_REGEX =
  /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;

export function splitTextWithLinks(text) {
  if (!text) return [];

  const textArr = text.split(" ");

  const textAndLinksArr = textArr.map((str, index) => {
    const hasSpace = !(index === textArr.length - 1);
    const isLink = URL_REGEX.test(str);

    if (isLink) {
      const href = str.startsWith("http") ? str : `https://${str}`;
      return {
        text: str,
        isLink,
        href,
        hasSpace,
      };
    }

    return {
      text: str,
      isLink,
      hasSpace,
    };
  });

  return textAndLinksArr;
}

//get text array
//check if it has naything
//use string.test to check if its the regex
//if it is return it as an object that has the isLink property set to true
//else isLisk is set to false
