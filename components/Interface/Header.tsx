import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'universal-cookie';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { pathname } = useRouter(),
    cookie = new Cookies(),
    logOut = () => {
      cookie.remove('token');
      cookie.remove('username');
      cookie.remove('email');
      cookie.remove('userId');
      cookie.remove('hashedPassword');
    };
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__inner}>
        <Link href="/">
          <div className={styles.lhs}>
            <Image
              src="/svgs/tic-tac-toe.png"
              alt="TicTacToe"
              width={100}
              height={100}
            />
            <h1>{title}</h1>
          </div>
        </Link>
        <div className={styles.rhs}>
          {pathname === '/register' ? (
            <Link href="/login">
              <button className={styles.login__btn}>Login</button>
            </Link>
          ) : pathname === '/' ? (
            <>
              <Link href="/login">
                <button className={styles.login__btn}>Login</button>
              </Link>
              <Link href="/register">
                <button className={styles.login__btn}>Register</button>
              </Link>
            </>
          ) : pathname === '/game' ? (
            <Link href="/login">
              <button onClick={logOut} className={styles.login__btn}>
                Logout
              </button>
            </Link>
          ) : pathname === '/login' ? (
            <Link href="/register">
              <button className={styles.login__btn}>Register</button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
