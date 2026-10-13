import React, { ReactNode } from "react";
import clsx from "clsx";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Card component with subtle border, consistent padding, and hover feedback.
 * Includes focus-visible outline for accessibility when interactive.
 */
export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-neutral-gray-100 rounded-lg border border-neutral-gray-200 p-6 shadow-sm transition-shadow motion-safe:duration-200",
        "hover:shadow-md hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
        className,
      )}
    >
      {children}
    </div>
  );
};
