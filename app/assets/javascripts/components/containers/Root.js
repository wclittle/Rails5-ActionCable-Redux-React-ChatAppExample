import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import ChatApp from './ChatApp';
import configureStore from '../store/configureStore';
import {setMessages, addMessage} from '../actions/chat'

const store = configureStore();

export default class Root extends Component {
  componentWillMount() {
    store.dispatch(setMessages(this.props.messages));
  }
  render() {
    return (
      <Provider store={store}>
        <ChatApp />
      </Provider>
    );
  }
}
