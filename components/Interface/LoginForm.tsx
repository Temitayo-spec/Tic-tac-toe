import React, { useState, useEffect } from 'react';
import styles from '../../styles/Login.module.scss';
import AnimatedLetters from './AnimatedLetters';

type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  const [letterClass, setLetterClass] = useState('text__animate');
  const gameArray = 'Login'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text__animate__hover');
    }, 5000);
  }, []);

  return (
    <div>
      <div className={styles.lhs}>
        <div className={styles.lhs__content}>
          <div className={styles.lhs__content__title}>
            <AnimatedLetters
              strChars={gameArray}
              letterClass={letterClass}
              idx={2}
              className={styles.lhs__content__title__text}
            />
            <p>
              What are you waiting for? <br />
              sign in and start playing with your friends!
            </p>
          </div>
          <div className={styles.lhs__content__form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.lhs__content__form__input}>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.lhs__content__form__input}>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className={styles.lhs__content__form__input}>
                <button type="submit">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
