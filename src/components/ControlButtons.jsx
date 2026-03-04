const ControlButtons = ({ onUndo, onReset, canUndo }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className={`
          relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl font-black text-sm sm:text-base
          transition-all duration-300 ease-out transform
          ${
            canUndo
              ? "bg-gradient-to-br from-blue-400 via-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-indigo-400/60 hover:-translate-y-1 active:translate-y-0 active:scale-95"
              : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 cursor-not-allowed shadow-inner"
          }
        `}
      >
        ↶ Undo
      </button>

      <button
        onClick={onReset}
        className="
          relative w-full sm:w-auto px-6 sm:px-8 py-3 rounded-2xl font-black text-sm sm:text-base
          bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600
          text-white shadow-lg shadow-teal-300/50
          hover:shadow-xl hover:shadow-teal-400/60
          hover:-translate-y-1 active:translate-y-0 active:scale-95
          transition-all duration-300 ease-out transform
        "
      >
        ↺ Reset Game
      </button>
    </div>
  );
};

export default ControlButtons;
