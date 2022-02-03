import React from "react";

export default function button({message, restart}){
    return <div style={styles.container}>
        <h2 style={styles.text}>{message}</h2>
        <br />
        <button onClick={restart} style={styles.button}>RESTART GAME</button>
    </div>
}

const styles = {
    text:{
        color: 'white',
        textAlign: 'center'
    },
    button:{
        height: 50,
        width: '50%',
        backgroundColor: 'Blue',
        border: 'none',
        alignItems: 'center',
        cursor: 'pointer',
        horizontalAlign: 'center',
        color: 'white',
        
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    }
}