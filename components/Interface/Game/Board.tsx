import React, { useState } from 'react';
import styles from '../../../styles/Board.module.scss';

type Props = {};

const Board = (props: Props) => {
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('');
  const [isDraw, setIsDraw] = useState(false);

  const handleCellClick = (row: number, col: number) => {
    if (board[row][col] !== '' || winner !== '') {
      return;
    }

    const newBoard = [...board];
    newBoard[row][col] = turn;
    setBoard(newBoard);

    if (checkWinner(newBoard, turn)) {
      setWinner(turn);
      return;
    }

    if (checkDraw(newBoard)) {
      setIsDraw(true);
      return;
    }

    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const checkWinner = (board: string[][], turn: string) => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === turn &&
        board[i][1] === turn &&
        board[i][2] === turn
      ) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === turn &&
        board[1][i] === turn &&
        board[2][i] === turn
      ) {
        return true;
      }
    }

    // Check diagonals
    if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn) {
      return true;
    }

    if (board[0][2] === turn && board[1][1] === turn && board[2][0] === turn) {
      return true;
    }

    return false;
  };

  const checkDraw = (board: string[][]) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }

    return true;
  };

  const renderCell = (row: number, col: number) => {
    return (
      <div className={styles.cell} onClick={() => handleCellClick(row, col)}>
        {board[row][col]}
      </div>
    );
  };
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Tic Tac Toe</h1>
        <p>
          Game by{' '}
          <a
            href="https://github.com/Temitayo-spec"
            target="_blank"
            rel="noopener noreferrer"
          >
            Temitayo
          </a>
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.status}>
          {winner && <div className={styles.winner}>Winner is {winner}</div>}
          {!winner && !isDraw && (
            <div className={styles.turn}>Next turn is {turn}</div>
          )}
          {!winner && isDraw && <div className={styles.turn}>Game is draw</div>}
        </div>
        <div className={styles.board}>
          {renderCell(0, 0)}
          {renderCell(0, 1)}
          {renderCell(0, 2)}
          {renderCell(1, 0)}
          {renderCell(1, 1)}
          {renderCell(1, 2)}
          {renderCell(2, 0)}
          {renderCell(2, 1)}
          {renderCell(2, 2)}
        </div>
      </div>
    </>
  );
};

export default Board;
