const GameStats = ({ moveCount, canUndo }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-500 to-indigo-600 p-3 sm:p-4 rounded-2xl text-center shadow-lg shadow-indigo-300/40">
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full" />
        <p className="text-indigo-100 text-xs font-bold uppercase tracking-widest mb-1">Total Moves</p>
        <p className="text-3xl sm:text-4xl font-black text-white">{moveCount}</p>
      </div>

      <div className={`relative overflow-hidden p-3 sm:p-4 rounded-2xl text-center shadow-lg transition-all duration-300 ${
        canUndo
          ? "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-teal-300/40"
          : "bg-gradient-to-br from-gray-400 to-slate-600 shadow-gray-300/40"
      }`}>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full" />
        <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">Undo</p>
        <p className="text-3xl sm:text-4xl font-black text-white">{canUndo ? "On" : "Off"}</p>
      </div>
    </div>
  );
};

export default GameStats;
