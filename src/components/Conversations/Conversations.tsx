import React, { FC, useCallback } from 'react';
import { Conversation } from 'types';
import './Conversations.css';

interface ConversationsProps {
  conversations: Conversation[];
  selected: string;
  onSelectConversation: (id: string) => void;
}

export const Conversations: FC<ConversationsProps> = ({
  conversations,
  selected,
  onSelectConversation,
}: ConversationsProps) => {
  return (
    <div className='conversations-container'>
      {conversations.map((c) => (
        <button
          key={c.id}
          onClick={useCallback(() => onSelectConversation(c.id), [])}
          type='button'
          className={c.id === selected ? 'selected' : ''}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
};
