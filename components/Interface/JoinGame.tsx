import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useChatContext, Channel } from 'stream-chat-react';
import Game from './Game';
import styles from '../../styles/JoinGame.module.scss';
import AnimatedLetters from './AnimatedLetters';
import { useRecoilState } from 'recoil';
import { channelAtom } from '../../atom/channelAtom';
import Loader from '../Loader/Loader';

type Props = {};

const JoinGame = (props: Props) => {
  const [isLoading, setIsLoading] = useRecoilState(channelAtom);
  const [rivalUsername, setRivalUsername] = useState<string>('');
  const [channel, setChannel] = useState(null);

  const { client } = useChatContext();
  const createChannel = async () => {
    try {
      if (rivalUsername !== '') {
        setIsLoading(true);

        const response = await client.queryUsers({
          name: {
            $eq: rivalUsername,
          },
        });

        if (response.users.length === 0) {
          toast.error('User not found');
          setIsLoading(false);
          return;
        }

        const newChannel = client.channel('messaging', {
          members: [client.userID, response.users[0].id] as string[],
        });

        await newChannel.create();
        await newChannel.watch();
        setChannel(newChannel as any);
        setIsLoading(false);
        toast.success('Channel created');
      } else {
        toast.error('Please enter a username');
      }
    } catch (error) {
      setIsLoading(false);
      toast.error('Error creating channel');
    }
  };

  const [letterClass, setLetterClass] = useState('text__animate');
  const gameArray = 'Join Game / Create Game'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text__animate__hover');
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? <Loader size={100} speed={1} color="#ffd700" /> : ''}
      {channel ? (
        <Channel channel={channel}>
          <Game channel={channel} />
        </Channel>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.lhs}>
            <AnimatedLetters
              strChars={gameArray}
              letterClass={letterClass}
              idx={2}
              className={styles.lhs__content__title__text}
            />
            <p
              style={{
                color: '#fff',
                textAlign: 'center',
              }}
            >
              Input Rival&apos;s Username.
            </p>
            <input
              type="text"
              value={rivalUsername}
              onChange={(e) => setRivalUsername(e.target.value)}
            />
            <button onClick={createChannel}>Add Username</button>
          </div>
          <div className={styles.rhs}>
            <div className={styles.rhs__content}>
              <Image
                src="/images/connect.png"
                width={500}
                height={500}
                alt="connect"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinGame;
