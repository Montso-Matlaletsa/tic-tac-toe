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


export default function Board({squares, action}) {


  return <div style={styles.board}>
        {
            squares.map((square, index) =>(
                <Square value={square} key={index} action={()=>action(index)} />
            ))
        }
  </div>;
}
