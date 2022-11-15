import Image from 'next/image';
import { useEffect, useState } from 'react';
import { About, AnimatedLetters } from '../components';
import styles from '../styles/Home.module.scss';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

export default function Home() {
  const cookie = new Cookies();
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [letterClass, setLetterClass] = useState('text__animate');
  const gameArray = 'Tic Tac Toe'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text__animate__hover');
    }, 5000);
  }, []);
  useEffect(() => {
    if (cookie.get('token')) {
      router.push('/game');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <About openModal={openModal} setOpenModal={setOpenModal} />
      <main className={styles.main}>
        <div className={styles.lhs}>
          <h1 className={styles.title}>
            <AnimatedLetters
              letterClass={letterClass}
              strChars={gameArray}
              idx={2}
            />
          </h1>
          <p className={styles.description}>
            This is a multiplayer tic tac toe game built with Next.js and React,
            and styled with Sass.
          </p>
          <button className={styles.button} onClick={() => setOpenModal(true)}>
            About
          </button>
        </div>
        <div className={styles.rhs}>
          <Image
            height={400}
            width={400}
            src="/svgs/tic-tac-toe.png"
            alt="tic-tac-toe"
            className={styles.image}
          />
        </div>
      </main>
    </div>
  );
}
