import React, { useState } from "react";
import "./App.css";

// Komponen Square — menerima "value" dan "onClick" sebagai props
function Square({ value, onClick, isWinner }) {
  return (
    <button
      className={"square" + (isWinner ? " winner" : "")}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

// Komponen Board — menampilkan 9 kotak
function Board({ squares, onClick, winningSquares }) {
  return (
    <div className="board">
      {squares.map((val, i) => (
        <Square
          key={i}
          value={val}
          isWinner={winningSquares.includes(i)}
          onClick={() => onClick(i)}
        />
      ))}
    </div>
  );
}

// Fungsi untuk mengecek pemenang
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: [a, b, c] };
    }
  }
  return null;
}

// Komponen utama — menyimpan semua state permainan
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState([]);

  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningSquares = result ? result.line : [];
  const isDraw = !winner && squares.every((s) => s !== null);

  function handleClick(index) {
    // Abaikan klik kalau sudah ada pemenang atau kotak sudah terisi
    if (winner || squares[index]) return;

    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";

    setHistory([...history, squares]); // Simpan state sebelumnya
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  }

  function handleUndo() {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setSquares(prev);
    setHistory(history.slice(0, -1));
    setIsXTurn(!isXTurn);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setHistory([]);
  }

  let status;
  if (winner) {
    status = "Pemenang: " + winner + " 🎉";
  } else if (isDraw) {
    status = "Seri! Tidak ada yang menang.";
  } else {
    status = "Giliran: " + (isXTurn ? "X" : "O");
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p className="status">{status}</p>
      <Board
        squares={squares}
        onClick={handleClick}
        winningSquares={winningSquares}
      />
      <div className="controls">
        <button onClick={handleUndo} disabled={history.length === 0}>
          ↩ Undo
        </button>
        <button onClick={handleReset}>🔄 Reset</button>
      </div>
      <div className="info">
        <p>Giliran ke-{history.length + 1}</p>
      </div>
    </div>
  );
}

export default App;