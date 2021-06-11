import React, {Component} from 'react'
import PropTypes from 'prop-types';

class SendMessage extends Component  {
  state = {
    message: ''
  }
  	
  updateMessage = (message) => {  
    this.setState({message: message})
  }
  
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.message.trim() === '';
  };
  
  render(){
    	const {message} = this.state
      return(
        <div>
            <form className="input-group" onSubmit={(event) => this.props.sendMessage(event, this.props.username, message)}>
                <input type="text" className="form-control" value={message} placeholder="Enter your message..." onChange={ (event) => this.updateMessage(event.target.value)}/>
                <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
      )
	}
}

SendMessage.propTypes = {
  username: PropTypes.string.isRequired,
  sendMessage: PropTypes.func.isRequired,
}
export default SendMessage;