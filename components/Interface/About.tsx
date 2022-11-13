import React from 'react';
import styles from '../../styles/About.module.scss';

type Props = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const About = ({ openModal, setOpenModal }: Props) => {
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      {openModal && (
        <div className={styles.about__wrapper}>
          <div className={styles.about__inner}>
            <h1 className={styles.about__title}>About Tic Tac Toe</h1>
            <svg
              onClick={closeModal}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className={styles.about__close}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="rgba(0, 0, 0, 0.54)"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
            <p className={styles.about__text}>
              This is a simple tic tac toe game built with Next.js and React,
              and styled with Sass.
            </p>
            <p className={styles.about__text}>
              The game is built with a simple state management system, and the
              game board is rendered with a simple for loop.
            </p>
            <p className={styles.about__text}>
              Tic Tac Toe is a game for two players, X and O, who take turns
              marking the spaces in a 3×3 grid. The player who succeeds in
              placing three of their marks in a diagonal, horizontal, or
              vertical row is the winner.
            </p>
            <p className={styles.about__text}>
              It is a solved game with a forced draw assuming best play from
              both players.
            </p>

            <h1 className={styles.about__title}>How to Play</h1>
            <p className={styles.about__text}>
              The game is played on a grid that&apos;s 3 squares by 3 squares.
            </p>
            <p className={styles.about__text}>
              You are X, your friend (or the computer in this case) is O.
              Players take turns putting their marks in empty squares.
            </p>
            <p className={styles.about__text}>
              The first player to get 3 of her marks in a row (up, down, across,
              or diagonally) is the winner.
            </p>
            <p className={styles.about__text}>
              When all 9 squares are full, the game is over. If no player has 3
              marks in a row, the game ends in a tie.
            </p>
            <p className={styles.about__text}>
              You can play the game against the computer, or you can play
              against a friend.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
