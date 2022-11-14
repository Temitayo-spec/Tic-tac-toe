import React from 'react';
import { StreamChat } from 'stream-chat';
import { JoinGame } from '../components';
import { Chat } from 'stream-chat-react';

type Props = {};

const Game = (props: Props) => {
  const client = StreamChat.getInstance('udmu9745hbke');
  return (
    <div>
      <Chat client={client} theme="team light">
        <JoinGame />
      </Chat>
    </div>
  );
};

export default Game;
