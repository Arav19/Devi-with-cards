import React from 'react';
import LuckyCard from './LuckyCard';

const LuckySection = () => {
  const luckyItems = [
    {
      title: "Om Shreem Hreem Kleem",
      subtitle: "ॐ श्रीं ह्रीं क्लीं",
      value: "ॐ श्रीं ह्रीं क्लीं",
      description: "Chant with pure intention."
    },
    {
      title: "Lucky Color",
      value: "Saffron Orange",
      description: "The color of spiritual awakening and divine consciousness. Wear it to enhance your aura.",
      color: "#FF7F00"
    },
    {
      title: "Lucky Number",
      value: "108",
      description: "A sacred number representing cosmic completeness. Use it for important decisions today."
    }
  ];

  return (
    <section className="py-12 px-4 relative overflow-hidden">
      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent">
            Your Daily Blessings
          </span>
        </h2>
        <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
          Click each card to reveal your mystical guidance for today.
        </p>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {luckyItems.map((item, index) => (
              <LuckyCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                value={item.value}
                description={item.description}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuckySection;