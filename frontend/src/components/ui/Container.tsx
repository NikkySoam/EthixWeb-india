import { ReactNode } from "react";
import clsx from "clsx";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * A responsive container that centers content and applies horizontal padding.
 * Uses Tailwind's max-w-7xl breakpoint for large screens.
 */
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
};
