import React, { useEffect } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-24 right-4 z-[9999] animate-fadeIn">
      <div className={`flex items-center gap-3 rounded-2xl px-6 py-4 shadow-2xl border ${
        type === 'success' 
          ? 'bg-slate-800 border-orange-500/30 text-orange-400' 
          : 'bg-slate-800 border-red-500/30 text-red-400'
      }`}>
        {type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
        <span className="text-sm font-bold tracking-wide uppercase">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
