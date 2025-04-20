import React, { useState } from 'react';
import ScratchCard from 'react-scratchcard-v2';

interface LuckyScratchCardProps {
  title: string;
  value: string;
  image: string;
}

const LuckyScratchCard: React.FC<LuckyScratchCardProps> = ({ title, value, image }) => {
  const [isScratched, setIsScratched] = useState(false);

  const handleScratch = (progress: number) => {
    if (progress > 70) {
      setIsScratched(true);
    }
  };

  return (
    <div className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-purple-900/20 backdrop-blur-sm rounded-2xl border border-yellow-500/20" />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="relative w-full h-48 rounded-xl overflow-hidden">
          <ScratchCard
            width={280}
            height={192}
            image="/images/scratch-cover.png"
            finishPercent={70}
            onComplete={() => handleScratch(100)}
          >
            <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-purple-900 to-purple-800">
              <img src={image} alt="" className="w-16 h-16 mb-4 opacity-80" />
              <span className="text-2xl font-bold text-yellow-400">{value}</span>
            </div>
          </ScratchCard>
        </div>
        {!isScratched && (
          <p className="mt-4 text-sm text-purple-200">Scratch to reveal your {title.toLowerCase()}</p>
        )}
      </div>
    </div>
  );
};

export default LuckyScratchCard;