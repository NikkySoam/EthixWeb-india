import React, { ReactNode } from "react";
import clsx from "clsx";

export interface SectionHeadingProps {
  title?: string;
  subtitle?: string;
  className?: string;
  children?: ReactNode;
}

/**
 * Displays a prominent heading with an optional subtitle.
 * Uses the brand colour and a heading font for visual hierarchy.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  const headingText = title ?? children;

  return (
    <div className={clsx("text-center mb-12", className)}>
      <h2 className="font-heading text-4xl md:text-5xl text-brand mb-4">
        {headingText}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-neutral-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
