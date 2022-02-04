import React, {useState} from 'react';
import Square from './Square'

const styles = {
    board: {
        width: 400,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gridGap: 2,
        height: 400,
    
    }
}

const action = ()=>{
    alert('hala')
}

export default function Board({squares}) {


  return <div style={styles.board}>
        {
            squares.map((square, index) =>(
                <Square value={index} key={index} action={action} />
            ))
        }
  </div>;
}
