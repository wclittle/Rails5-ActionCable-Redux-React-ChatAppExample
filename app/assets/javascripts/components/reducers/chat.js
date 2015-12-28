import { SET_MESSAGES, ADD_MESSAGE } from '../actions/chat';

export default function chat(state = {}, action) {
  const { type, messages } = action;

  switch (type) {
  case ADD_MESSAGE:
    return [
      ...state,
      action.message
    ]
  case SET_MESSAGES:
    return messages
  default:
    return state;
  }
}
