import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Header.module.scss';
import Link from 'next/link';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className={styles.header__wrapper}>
      <div className={styles.header__inner}>
        <div className={styles.lhs}>
          <Image
            src="/svgs/tic-tac-toe.png"
            alt="TicTacToe"
            width={100}
            height={100}
          />
          <h1>{title}</h1>
        </div>
        <div className={styles.rhs}>
          <Link href="/login">
            <button className={styles.login__btn}>Login</button>
          </Link>
          <Link href="/register">
            <button className={styles.register__btn}>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
