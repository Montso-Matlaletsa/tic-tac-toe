import React, {useState} from 'react';
import Board from './Board'
import {calculateWinner} from '../helpers/calculateWinner'
import Button from "./button";


export default function Game() {
    const [xIsCurrentPlayer, setXisCurrentPlayer] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [drawCounter, setDrawCounter] = useState(0)
    const winner = calculateWinner(squares)


    const action = (index) =>{
        const squareCopy = [...squares]
        let draw = drawCounter + 1
        if (calculateWinner(squares) || squares[index]) {
            return;
        }
        setDrawCounter(draw)
        squareCopy[index] = xIsCurrentPlayer ? <span style={styles.X}>X</span> : <span style={styles.O}>O</span>
        setSquares(squareCopy)
        setXisCurrentPlayer(!xIsCurrentPlayer)

    }

    const restartGame = ()=>{
        const squareCopy = Array(9).fill(null)
        const currentPlayer = true
        const drawCounter = 0
        setSquares(squareCopy)
        setXisCurrentPlayer(currentPlayer)
        setDrawCounter(drawCounter)
    }

  return <div>
      {
          winner && <Button message={"Winner is: "+winner} restart={restartGame} />

      }
      {
          drawCounter === 9 && <Button message="It's a Draw!!" restart={restartGame} />
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
    },
    X:{
        color: 'red',
        fontSize: 50
    },
    O:{
        color: 'green',
        fontSize: 50
    }
}
