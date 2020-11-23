import React, { FC } from 'react';
import dateformat from 'dateformat';
import { Message } from 'types';
import { sortByDate } from 'utils';
import './Messages.css';

interface MessagesProps {
  messages: Message[];
}

export const Messages: FC<MessagesProps> = ({ messages }: MessagesProps) => (
  <div className='messages-container'>
    {sortByDate(messages, 'asc').map((m) => (
      <div className='message' key={m.id}>
        <div className='date'>
          {dateformat(m.last_updated, 'ddd, dd mmm yy HH:MM')}
        </div>
        <div>{m.text}</div>
      </div>
    ))}
  </div>
);
