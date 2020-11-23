import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ConversationsJSON from 'Conversations.json';
import { Conversation, Message } from 'types';
import { sortByDate } from 'utils';
import { Conversations } from './Conversations';
import { Messages } from './Messages';
import { SendMessage } from './SendMessage';
import './App.css';

const sortedConversations = sortByDate(ConversationsJSON, 'desc');

export const App = () => {
  const [conversations, setConversations] = useState<Conversation[]>(
    sortedConversations,
  );
  const [selected, setSelected] = useState<string>(sortedConversations[0].id);

  const getMessages = (): Message[] =>
    conversations.find((c) => c.id === selected)?.messages || [];

  const onSelectConversation = (id: string) => setSelected(id);

  const onSendMessage = (text: string) => {
    const newMessage: Message = {
      id: uuidv4(),
      last_updated: new Date().toISOString(),
      text,
    };
    setConversations((prevState) =>
      prevState.map((c) =>
        c.id === selected ? { ...c, messages: [...c.messages, newMessage] } : c,
      ),
    );
  };

  return (
    <div className='App'>
      <Conversations
        conversations={conversations}
        selected={selected}
        onSelectConversation={onSelectConversation}
      />
      <Messages messages={getMessages()} />
      <SendMessage onSendMessage={onSendMessage} />
    </div>
  );
};
