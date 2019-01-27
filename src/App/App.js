import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import SendMessageForm from './components/sendMessageForm/sendMessageForm';
import MessageList from './components/messageList/messageList';
import Title from './components/title/title';

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/0c189868-5ebb-4311-8552-37b4dff1664d/token";
const instanceLocator = "v1:us1:0c189868-5ebb-4311-8552-37b4dff1664d";
const roomId = 19379174;
const username = 'User1'

class App extends Component {
  constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    render() {
        return (
            <div className="App">
              <Title />
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>
        );
    }

}

export default App;
