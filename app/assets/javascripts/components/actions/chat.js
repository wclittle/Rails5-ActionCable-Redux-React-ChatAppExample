export const ADD_MESSAGE = 'ADD_MESSAGE';
export const SET_MESSAGES = 'SET_MESSAGES';

export function setMessages(messages) {
  return {
    type: SET_MESSAGES,
    messages: messages
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message: message
  };
}
