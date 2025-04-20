import React, { useState } from 'react';
import { Flower } from 'lucide-react';

interface LuckyCardProps {
  title: string;
  subtitle?: string;
  value: string;
  description: string;
  translation?: string;
  color?: string;
}

const LuckyCard: React.FC<LuckyCardProps> = ({ title, subtitle, value, description, translation, color }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div 
      className="relative w-full max-w-[280px] aspect-[3/4] cursor-pointer group perspective"
      onClick={() => setIsRevealed(true)}
    >
      <div className={`relative w-full h-full transition-all duration-700 transform-style preserve-3d ${isRevealed ? 'rotate-y-180' : ''}`}>
        {/* Front of card (Hidden content) */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full rounded-2xl border-2 border-yellow-400/50 overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg shadow-yellow-900/20">
            {/* Dense circle grid pattern */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-[14] gap-0.5 p-2">
              {[...Array(140)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border border-yellow-300/40"
                />
              ))}
            </div>
            
            {/* Content */}
            <div className="relative w-full h-full flex items-center justify-center p-6">
              <div className="text-center">
                <div className="mb-4 opacity-80">
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                    <span className="text-2xl text-purple-900">✧</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-purple-900 mb-3 font-vedic">{title}</h3>
                <p className="text-sm text-purple-900/90 tracking-wide uppercase">Tap to reveal your destiny</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card (Revealed content) */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden">
          <div className="w-full h-full rounded-2xl border-2 border-purple-300/50 p-6 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 shadow-lg shadow-purple-900/20">
            {/* Dense circle grid pattern */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-[14] gap-0.5 p-2">
              {[...Array(140)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-full border border-purple-400/30"
                />
              ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-[90%]">
              <h3 className="text-lg font-semibold mb-2 text-purple-900 tracking-wide">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm text-purple-800/90 mb-4 font-vedic">{subtitle}</p>
              )}
              <div className="mb-4">
                <p className="text-3xl font-bold text-purple-900 font-vedic leading-tight">{value}</p>
                {translation && (
                  <p className="text-sm text-purple-800/90 mt-2 italic">{translation}</p>
                )}
                {color && (
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Flower className="w-6 h-6" style={{ color }} />
                  </div>
                )}
              </div>
              <div className="w-12 h-1 mx-auto bg-gradient-to-r from-transparent via-purple-600/30 to-transparent mb-4" />
              <p className="text-sm text-purple-900/90 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyCard;