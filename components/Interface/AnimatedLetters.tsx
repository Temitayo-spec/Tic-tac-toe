import React, { Key } from 'react';
import styles from '../../styles/AnimatedLetters.module.scss';

type Props = {
  strChars: string[];
  idx: number;
  letterClass: string;
};

const AnimatedLetters = ({ strChars, letterClass, idx }: Props) => {
  return (
    <span>
      {strChars.map((char: string, i: number) => {
        return (
          <span key={i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
