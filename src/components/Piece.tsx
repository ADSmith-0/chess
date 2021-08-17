import { useState } from 'react';
import { nameFromId } from "../util/Piece";
import styles from '../styles/Piece.module.css';
export default function Piece({ id }:{id:string}) {
    const [ dragged, setDragged ] = useState(false);
    const getPieceFromId = (id:string) => `/images/${id.substr(0,2).toLowerCase()}.png`;
    const handleMove = (e:any) => {
        e.preventDefault();
        setDragged(true);
    }
    const handleRelease = () => setDragged(false);
    return (
        <div>
            <img 
                className={`${styles.img_piece} ${dragged ? styles.dragged : ''}`}
                src={getPieceFromId(id)} 
                alt={nameFromId(id)} 
                height="100"
                width="100"
                onMouseDown={handleMove}
                onMouseUp={handleRelease}
            />
        </div>
    )
}
