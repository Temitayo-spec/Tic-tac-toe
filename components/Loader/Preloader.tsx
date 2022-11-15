import React from 'react';
import { LeapFrog } from '@uiball/loaders';
import styles from '../../styles/Preloader.module.scss';

type Props = {};

const Preloader = (props: Props) => {
  return (
    <div className={styles.preloader__ctn}>
      <LeapFrog size={60} speed={2.5} color="black" />
      <h1>Tic Tac Toe</h1>
    </div>
  );
};

export default Preloader;
