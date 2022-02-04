import React, {useState} from 'react';
import Board from './Board'
import {calculateWinner} from '../helpers/calculateWinner'
import Button from "./button";


export default function Game() {
    const [xIsCurrentPlayer, setXisCurrentPlayer] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));
    const winner = calculateWinner(squares)


    const action = (index) =>{
        const squareCopy = [...squares]
        if (calculateWinner(squares) || squares[index]) {
            return;
        }

        squareCopy[index] = xIsCurrentPlayer ? 'X' : 'O'
        setSquares(squareCopy)
        setXisCurrentPlayer(!xIsCurrentPlayer)

    }

    const restartGame = ()=>{
        const squareCopy = Array(9).fill(null)
        const currentPlayer = true
        setSquares(squareCopy)
        setXisCurrentPlayer(currentPlayer)

    }

  return <div>
      {
          winner && <Button winner={winner} restart={restartGame} />

      }
      <div style={styles.board}>
          <Board squares={squares} action={action} />
      </div>

    </div>;
}

const styles = {
    board: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: '100px',
        backgroundColor: 'black',
        left: '50%'
    }
}
