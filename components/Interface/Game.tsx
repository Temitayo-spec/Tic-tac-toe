import React, { useState } from 'react';
import Board from './Game/Board';
import styles from "../../styles/Game.module.scss";
import { Waveform } from '@uiball/loaders';


type Props = {
  channel: any;
};

const Game = ({ channel }: Props) => {
  const [playerJoined, setPlayerJoined] = useState(
    channel.state.watcher_count === 2
  );

  channel.on('user.watching.start', (e: any) => {
    setPlayerJoined(e.watcher_count === 2);
  });

  if (!playerJoined) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.waiting__text}>Waiting for opponent.....</h1>
        <div className={styles.loader}>
          <Waveform size={100} lineWeight={3.5} speed={2} color="#ffd700" />;
        </div>
      </div>
    );
  }
  return <div className={styles.game__ctn}>
    <Board />
    {/* <Chat /> */}

  </div>;
};

export default Game;
