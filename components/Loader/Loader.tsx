import React from 'react';
import { NewtonsCradle } from '@uiball/loaders';
import styles from '../../styles/Loader.module.scss';

type Props = {
  size?: number;
  lineWeight?: number;
  speed?: number;
  color?: string;
};

const Loader = ({ size, speed, color }: Props) => {
  return (
    <div className={styles.loader__ctn}>
      <NewtonsCradle size={size} speed={speed} color={color} />
    </div>
  );
};

export default Loader;
