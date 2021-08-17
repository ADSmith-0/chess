import Piece from './Piece';
import styles from '../styles/Tile.module.css';
export default function Tile({ location, piece }:{location:string, piece:string}) {
    return (
        <section className={styles.tile}>
            {!!piece && <Piece id={piece}/>}
        </section>
    )
}
