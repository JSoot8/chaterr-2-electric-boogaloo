import { fiftyFifty, uuid } from './helpers';

export const chaterr = createChaterr();

function createChaterr() {
  const listeners = { messages: [], typings: [] };

  const onMessage = (callback) => {
    listeners.messages.push(callback);
    return () => {
      listeners.messages = listeners.messages.filter((listener) => listener !== callback);
    };
  };

  const sendMessage = (content, metadata = {}) => {
    const sender = metadata.sender ?? 'Me';
    const messageToSend = {
      content,
      sender,
      id: uuid(),
      timestamp: new Date().getTime(),
    };

    if (sender === 'Me' && fiftyFifty()) {
      throw new Error('Sorry, failed');
    }

    listeners.messages.forEach((listener) => {
      listener(messageToSend);
    });
  };

  const onTyping = (callback) => {
    listeners.typings.push(callback);
    return () => {
      listeners.typings = listeners.typings.filter((listener) => listener !== callback);
    };
  };

  const triggerTyping = (sender) => {
    listeners.typings.forEach((listener) => {
      listener(sender);
    });
  }

  return {
    onMessage,
    sendMessage,
    onTyping,
    triggerTyping
  };
}