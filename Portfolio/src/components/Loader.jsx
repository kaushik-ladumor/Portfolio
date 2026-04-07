import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 transition-opacity duration-700">
      <div className="relative flex items-center justify-center">
        {/* Animated Spin Ring */}
        <div className="h-24 w-24 rounded-full border-4 border-slate-800 border-t-orange-500 animate-spin"></div>
        {/* Monogram */}
        <div className="absolute font-bold text-2xl text-orange-500 tracking-tighter">KL</div>
      </div>
      <p className="mt-6 font-medium text-slate-400 tracking-widest text-sm uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
