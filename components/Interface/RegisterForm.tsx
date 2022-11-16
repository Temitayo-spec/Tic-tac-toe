import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/RegisterForm.module.scss';
import AnimatedLetters from './AnimatedLetters';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { authAtom } from '../../atom/authAtom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type Props = {};

const RegisterForm = (props: Props) => {
  const router = useRouter(),
    gameArray = 'Register'.split(''),
    cookies = new Cookies(),
    [letterClass, setLetterClass] = useState('text__animate'),
    [email, setEmail] = useState(''),
    [password, setPassword] = useState(''),
    [confirmPassword, setConfirmPassword] = useState(''),
    [username, setUsername] = useState(''),
    [inputType, setInputType] = useState('password'),
    [inputType2, setInputType2] = useState('password'),
    [_, setIsLoading] = useRecoilState(authAtom),
    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return;
      }

      if (email !== '' && password !== '' && username !== '') {
        setIsLoading({ loading: true, error: false });
        axios
          .post('/api/auth/register', {
            email,
            password,
            username,
          })
          .then((res) => {
            const { token, email, username, userId, hashedPassword } = res.data;

            if (res.status === 200) {
              cookies.set('token', token);
              cookies.set('email', email);
              cookies.set('username', username);
              cookies.set('userId', userId);
              cookies.set('hashedPassword', hashedPassword);
              router.push('/game');
              toast.success('Registered successfully');
              setIsLoading({ loading: false, error: false });
            }
          })
          .catch((err) => {
            setIsLoading({ loading: false, error: false });
            toast.error('Username or email already exists');
          });
      } else {
        toast.error('Please fill in all fields');
      }
    };

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
              sign up and start playing with your friends!
            </p>
          </div>
          <div className={styles.lhs__content__form}>
            <form onSubmit={handleSubmit}>
              <div className={styles.lhs__content__form__input}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
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
                  type={inputType}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {inputType === 'password' ? (
                  <FaEye
                    className={styles.lhs__content__form__input__password__icon}
                    onClick={() => setInputType('text')}
                  />
                ) : (
                  <FaEyeSlash
                    className={styles.lhs__content__form__input__password__icon}
                    onClick={() => setInputType('password')}
                  />
                )}
              </div>
              <div className={styles.lhs__content__form__input}>
                <input
                  type={inputType2}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {inputType2 === 'password' ? (
                  <FaEye
                    className={styles.lhs__content__form__input__password__icon}
                    onClick={() => setInputType2('text')}
                  />
                ) : (
                  <FaEyeSlash
                    className={styles.lhs__content__form__input__password__icon}
                    onClick={() => setInputType2('password')}
                  />
                )}
              </div>
              <div className={styles.lhs__content__form__input}>
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
