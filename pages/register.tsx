import Image from 'next/image';
import React from 'react';
import { RegisterForm } from '../components';
import styles from '../styles/RegisterForm.module.scss';


type Props = {};

const register = (props: Props) => {
  return (
    <div className={styles.signup__wrapper}>
      <Image
        src="/images/register.png"
        alt="register"
        width={500}
        height={500}
      />

      <RegisterForm />
    </div>
  );
};

export default register;
