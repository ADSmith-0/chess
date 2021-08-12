import Piece from './Piece';
import styles from '../styles/Tile.module.css';
export default function Tile({ location, piece }:{location:String, piece:String}) {
    return (
        <div className={styles.tile}>
            {!!piece && <Piece id={piece}/>}
        </div>
    )
}
