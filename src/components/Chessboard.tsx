import styles from '../styles/Chessboard.module.css';
import { ChessboardType } from '../types/Chessboard';
import Tile from './Tile';
const { chessboard } = styles;
export default function Chessboard({ state }:{state:ChessboardType}) {
    const x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const y = [1, 2, 3, 4, 5, 6, 7, 8].reverse();
    const occupiedTiles:any = {};
    for(let piece in state){
        // @ts-ignore
        occupiedTiles[state[piece]] = piece;
    }
    console.log(occupiedTiles);
    return (
        <section id={chessboard}>
            {y.map((y_coord:Number) => (
                <div className={styles.row}>{
                    x.map((x_coord:String) => {
                        const location:any = x_coord + y_coord.toString();
                        //@ts-ignore
                        return <Tile 
                            key={location} 
                            location={location}
                            piece={occupiedTiles[location]}
                        />
                    })
                }</div>
            ))}
        </section>
    )
}
