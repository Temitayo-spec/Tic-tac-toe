import React from 'react';

type Props = {
  strChars: string[];
  idx: number;
  letterClass: string;
  className?: string;
};

const AnimatedLetters = ({ strChars, letterClass, idx, className }: Props) => {
  return (
    <span>
      {strChars.map((char: string, i: number) => {
        return (
          <span key={i} className={`${letterClass} _${i + idx} ${className}`}>
            {char}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
