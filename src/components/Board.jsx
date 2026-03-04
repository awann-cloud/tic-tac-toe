import Square from "./Square";

const Board = ({ squares, onClick, winningSquares }) => {
  return (
    <div className="relative p-1 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/50">
      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 bg-white/10 backdrop-blur-sm p-3 sm:p-5 md:p-6 rounded-3xl">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onClick={() => onClick(i)}
            isWinner={winningSquares.includes(i)}
            isEmpty={value === null}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
