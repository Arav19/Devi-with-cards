import React from 'react';

interface ConstellationProps {
  points: { x: number; y: number }[];
}

const Constellation: React.FC<ConstellationProps> = ({ points }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {points.map((point, i) => {
        if (i === points.length - 1) return null;
        const nextPoint = points[i + 1];
        return (
          <line
            key={i}
            x1={`${point.x}%`}
            y1={`${point.y}%`}
            x2={`${nextPoint.x}%`}
            y2={`${nextPoint.y}%`}
            stroke="rgba(253,185,49,0.2)"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
};

export default Constellation;