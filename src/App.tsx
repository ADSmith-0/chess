import styles from './styles/App.module.css';
import Chessboard from './components/Chessboard';
import { useState } from 'react';
function App() {
  const [ playable, setPlayable ] = useState(false);
  return (
    <main id={styles.main}>
      <Chessboard state={
        {
          "wr": "A1",
          "wn": "B1",
          "wb": "C1",
          "wq": "D1",
          "wk": "E1",
          "wB": "F1",
          "wN": "G1",
          "wR": "H1",
          "wp1": "A2",
          "wp2": "B2",
          "wp3": "C2",
          "wp4": "D2",
          "wp5": "E2",
          "wp6": "F2",
          "wp7": "G2",
          "wp8": "H2",
          "bp1": "A7",
          "bp2": "B7",
          "bp3": "C7",
          "bp4": "D7",
          "bp5": "E7",
          "bp6": "F7",
          "bp7": "G7",
          "bp8": "H7",
          "br": "A8",
          "bn": "B8",
          "bb": "C8",
          "bq": "D8",
          "bk": "E8",
          "bB": "F8",
          "bN": "G8",
          "bR": "H8",
        }
      }/>
    </main>
  );
}

export default App;
