import Image from 'next/image';
import React, { useEffect } from 'react';
import styles from '../styles/Login.module.scss';
import { LoginForm } from '../components';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  const cookie = new Cookies();
  useEffect(() => {
    if (cookie.get('token')) {
      router.push('/game');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.login__wrapper}>
      <LoginForm />
      <div className={styles.rhs}>
        <Image
          src="/images/login.png"
          alt="login"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};

export default Login;
