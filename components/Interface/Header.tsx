import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Header.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const { pathname } = useRouter();
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
          ) : (
            <Link href="/register">
              <button className={styles.login__btn}>Register</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
