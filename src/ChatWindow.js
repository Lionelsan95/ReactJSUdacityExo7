import React, {Component} from 'react'
import MessageList from './MessageList.js'
import SendMessage from './SendMessage.js'
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  
  	render(){
      
      const {messages, username, sendMessage} = this.props
      
      return (
        
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
        
        	<div className="name sender">{username}</div>

			<MessageList messages={messages} username={username} />

			<SendMessage sendMessage={sendMessage} username={username} />
        </div>
      )
    }
}
ChatWindow.propTypes = {
  messages: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
}
export default ChatWindow;