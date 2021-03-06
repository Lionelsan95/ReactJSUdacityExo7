import React from 'react'

const MessageList = (props) => {
  
  const {messages, username} = props
  
  return(
	<ul className="message-list">
		{messages.map((message, index) => (
			<li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
			</li>
			))
        }
	</ul>
  )
}

export default MessageList