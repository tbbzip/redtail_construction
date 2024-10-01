// src/components/Card.tsx

import React from 'react';
import { cn } from '@/lib/utils';
import { features } from '@/data/features';
import { IconType } from 'react-icons';

interface FeatureProps {
  title: string;
  description: string;
  icon: IconType; // Updated to IconType
  index: number;
}

const Card = () => {
  return (
    <div className="max-w-7xl mx-auto mt-2 py-10" id="solutions">
      <h1 className="heading mb-10 leading-relaxed text-black text-4xl font-bold text-center relative z-20">
        Our <span className="text-rb-100">Solution</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 gap-6">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon: Icon, // Destructure as Icon
  index,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col py-10 relative group/feature',
        (index === 0 || index === 4) && 'lg:border-l',
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600">
        <Icon fill="#CF1317" size={30} /> {/* Render the icon */}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-rb-100 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default Card;
