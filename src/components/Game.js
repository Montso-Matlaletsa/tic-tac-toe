import React, {useState} from 'react';
import Board from './Board'

const styles = {
    game: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: '100px',
        backgroundColor: 'black'
    }
}
export default function Game() {
   const [squares, setSquares] = useState(Array(9).fill('0'));
  return <div style={styles.game}>
        <Board squares={squares} />
  </div>;
}
