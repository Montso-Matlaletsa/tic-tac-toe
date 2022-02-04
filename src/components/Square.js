import React from 'react';

const style = {
    square :{
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
    text : {
        color: 'white',
        fontSize: '50px',
    }
}


export default function Square({action, value}) {
  return <button style={style.square} onClick={action}>
        <span style={style.text}>{value}</span>    
  </button>;
}
