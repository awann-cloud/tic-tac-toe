import React, { useState } from "react";
import Board from "./components/Board";
import StatusBadge from "./components/StatusBadge";
import ControlButtons from "./components/ControlButtons";
import GameStats from "./components/GameStats";
import { calculateWinner } from "./utils/calculateWinner";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState([]);

  const result = calculateWinner(squares);
  const winner = result?.winner || null;
  const winningSquares = result?.line || [];
  const isDraw = !winner && squares.every((s) => s !== null);
  const gameOver = winner || isDraw;

  const handleClick = (index) => {
    if (gameOver || squares[index]) return;
    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setHistory([...history, squares]);
    setSquares(newSquares);
    setIsXTurn(!isXTurn);
  };

  const handleUndo = () => {
    if (history.length === 0) return;
    setSquares(history[history.length - 1]);
    setHistory(history.slice(0, -1));
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setIsXTurn(true);
    setHistory([]);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-800 via-purple-900 to-slate-900 p-3 sm:p-4 md:p-6">
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur-lg opacity-60" />
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-5 sm:p-7 md:p-8 border border-white/20">

          <div className="text-center mb-5 sm:mb-7 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent tracking-tight mb-1">
              TIC TAC TOE
            </h1>
            <p className="text-purple-300/70 text-xs sm:text-sm font-semibold tracking-widest uppercase">React + Tailwind CSS</p>
          </div>

          <div className="mb-4 sm:mb-6">
            <StatusBadge winner={winner} isDraw={isDraw} isXTurn={isXTurn} />
          </div>

          <div className="mb-4 sm:mb-6">
            <Board
              squares={squares}
              onClick={handleClick}
              winningSquares={winningSquares}
            />
          </div>

          <div className="mb-4 sm:mb-6">
            <ControlButtons
              onUndo={handleUndo}
              onReset={handleReset}
              canUndo={history.length > 0}
            />
          </div>

          <GameStats moveCount={history.length} canUndo={history.length > 0} />

          <div className="text-center mt-6 pt-5 border-t border-white/10">
            <p className="text-purple-300/50 text-xs font-semibold tracking-widest uppercase">
              Made with React & Tailwind CSS
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;