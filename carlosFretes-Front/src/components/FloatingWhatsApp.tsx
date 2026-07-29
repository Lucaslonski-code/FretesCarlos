import React, { useEffect, useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  // Fecha o tooltip automaticamente após alguns segundos para evitar que ele
  // fique cobrindo campos do formulário ou o botão final em telas pequenas (320-375px).
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed right-4 sm:right-5 z-50 flex flex-col items-end gap-2"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom))' }}
    >
      
      {/* Tooltip Notification Box */}
      {showTooltip && (
        <div className="bg-neutral-900 text-white text-xs font-semibold px-3.5 py-2.5 rounded-2xl shadow-xl border border-neutral-800 flex items-center gap-2 animate-in slide-in-from-bottom duration-200 max-w-[calc(100vw-6rem)]">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0"></div>
          <span className="leading-tight">Dúvidas? Fale pelo WhatsApp!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="p-1 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors ml-1 cursor-pointer"
            aria-label="Fechar mensagem"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => openWhatsApp()}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-pointer relative group"
        aria-label="Iniciar conversa no WhatsApp"
        id="floating-whatsapp-fab"
      >
        <MessageSquare className="w-7 h-7 fill-neutral-950 text-neutral-950" />
        
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"></span>
      </button>

    </div>
  );
};
