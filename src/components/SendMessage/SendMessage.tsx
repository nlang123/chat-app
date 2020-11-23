import React, { FC, useState } from 'react';
import './SendMessage.css';

export interface SendMessageProps {
  onSendMessage: (text: string) => void;
}

export const SendMessage: FC<SendMessageProps> = ({
  onSendMessage,
}: SendMessageProps) => {
  const [message, setMessage] = useState<string>('');

  const handleOnClick = () => {
    onSendMessage(message);
    setMessage('');
  };

  const handleOnKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleOnClick();
    }
  };

  return (
    <div className='send-message-container'>
      <input
        aria-label='Enter message'
        placeholder='Enter message'
        type='text'
        name='message'
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        onKeyPress={handleOnKeyPress}
      />
      <button type='button' onClick={handleOnClick} disabled={!message}>
        Send
      </button>
    </div>
  );
};
