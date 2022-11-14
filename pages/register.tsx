import Image from 'next/image';
import React, { useEffect } from 'react';
import { RegisterForm } from '../components';
import styles from '../styles/RegisterForm.module.scss';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

type Props = {};

const Register = (props: Props) => {
  const cookie = new Cookies();
  const router = useRouter();
  useEffect(() => {
    if (cookie.get('token')) {
      router.push('/game');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.signup__wrapper}>
      <Image
        src="/images/register.png"
        alt="register"
        width={500}
        height={500}
        priority
      />

      <RegisterForm />
    </div>
  );
};

export default Register;
