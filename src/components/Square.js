import React from 'react';

export default function Square({action, value, i}) {
  return <button style={style.square} onClick={() => action(i)}>
        <span style={style.text}>{value}</span>    
  </button>;
}

const style = {
    square: {
        width: '100%',
        height: '100%',
        backgroundColor: 'blue',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        border: 'none',
        color: 'white'
    },
    text: {
        color: 'white',
        fontSize: '50px',
    }
}
