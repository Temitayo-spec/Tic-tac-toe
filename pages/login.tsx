import Image from 'next/image';
import React from 'react';
import styles from '../styles/Login.module.scss';
import { LoginForm } from '../components';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className={styles.login__wrapper}>
      <LoginForm />
      <div className={styles.rhs}>
        <Image src="/images/login.png" alt="login" width={500} height={500} />
      </div>
    </div>
  );
};

export default Login;
