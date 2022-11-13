import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Layout.module.scss';
import Header from '../Interface/Header';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>
          TicTacToe || {pathname === '/' ? 'Home' : pathname === "/login" ? "Login" : pathname === "/register" ? "Register" : pathname === "/game" ? "Game" : "404"}
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.layout}>
        <Header title="TicTacToe" />
        {children}
      </div>
    </>
  );
};

export default Layout;