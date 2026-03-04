const StatusBadge = ({ winner, isDraw, isXTurn }) => {
  if (winner) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-white px-4 py-4 sm:px-8 sm:py-5 rounded-2xl font-black text-xl sm:text-2xl shadow-xl shadow-amber-300/50 text-center">
        <div className="absolute inset-0 bg-white/10 animate-pulse rounded-2xl" />
        <span className="relative">🏆 Pemenang: {winner} 🏆</span>
      </div>
    );
  }

  if (isDraw) {
    return (
      <div className="bg-gradient-to-r from-slate-500 via-gray-600 to-zinc-600 text-white px-4 py-4 sm:px-8 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-xl shadow-gray-400/50 text-center">
        🤝 Seri! Tidak Ada Pemenang!
      </div>
    );
  }

  return (
    <div className={`px-4 py-4 sm:px-8 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-xl text-center transition-all duration-500 ${
      isXTurn
        ? "bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white shadow-blue-300/50"
        : "bg-gradient-to-r from-rose-400 via-red-500 to-pink-500 text-white shadow-red-300/50"
    }`}>
      {isXTurn ? "✦ Giliran Player X" : "✦ Giliran Player O"}
    </div>
  );
};

export default StatusBadge;
