import React, { Component, PropTypes } from 'react';

class Chat extends Component {

  render() {

    const { messages, addMessage } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const handleKeyUp = (e) => {
      if(e.keyCode == 13){
        App.room.speak(e.target.value);
        e.target.value = "";
      };
    };

    return (
      <div>
        <ul>
          {messages.map((msg) => {
              return <li key={`chat.msg.${msg.id}`}>{msg.content}</li>;
            })
          }
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="text" onKeyUp={handleKeyUp}/>
        </form>
      </div>
    );
  }
}

Chat.propTypes = {
  messages: PropTypes.any
};

export default Chat;
