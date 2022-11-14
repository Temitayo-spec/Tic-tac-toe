import React, { useState, useEffect } from 'react';
import styles from '../../styles/Login.module.scss';
import AnimatedLetters from './AnimatedLetters';
import axios from 'axios';
import Cookies from 'universal-cookie';

type Props = {};

const LoginForm = (props: Props) => {
  const cookies = new Cookies();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('/api/auth/login', { username, password }).then((res: any) => {
      const { token, email, username, userId, hashedPassword } = res.data;

      cookies.set('token', token);
      cookies.set('email', email);
      cookies.set('username', username);
      cookies.set('userId', userId);
      cookies.set('hashedPassword', hashedPassword);
    });
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
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
