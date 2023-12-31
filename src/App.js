import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  const ProjectID = '48841bfa-8b02-4c00-a430-1ffa17ebb2ef';
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
      <ChatEngine
        height='100vh'
        projectID={ProjectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()} />
      )

}

export default App