const Square = ({ value, onClick, isWinner, isEmpty }) => {
  const getStyle = () => {
    if (isWinner) return "bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-400 text-white ring-4 ring-yellow-300 ring-offset-2 scale-105 shadow-yellow-300";
    if (value === "X") return "bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 text-white shadow-blue-300";
    if (value === "O") return "bg-gradient-to-br from-rose-400 via-red-500 to-pink-600 text-white shadow-red-300";
    return "bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 text-gray-400 hover:from-violet-50 hover:via-purple-100 hover:to-indigo-100 hover:text-purple-400 hover:ring-2 hover:ring-purple-300 hover:ring-offset-1";
  };

  return (
    <button
      onClick={onClick}
      disabled={!isEmpty}
      className={`
        w-[5.5rem] h-[5.5rem] sm:w-24 sm:h-24 md:w-28 md:h-28
        rounded-2xl font-black text-3xl sm:text-4xl md:text-5xl
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        transform hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0
        disabled:cursor-not-allowed select-none
        border border-white/50
        ${getStyle()}
      `}
    >
      {value}
    </button>
  );
};

export default Square;
