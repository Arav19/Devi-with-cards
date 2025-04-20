import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingProps {
  value: number;
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </div>
  );
};

export default Rating;