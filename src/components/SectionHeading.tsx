import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-[11px] font-sans tracking-[0.25em] uppercase text-[#6E2634] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1B19] tracking-tight font-normal leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[#6B665F] text-base sm:text-lg leading-relaxed font-light font-sans">
          {description}
        </p>
      )}
    </div>
  );
};
