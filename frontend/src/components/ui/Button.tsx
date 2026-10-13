import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

/**
 * Versatile button with distinct visual variants.
 * Uses Tailwind utilities; respects prefers-reduced-motion.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  ...props
}) => {
  const base = "font-medium rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-safe:transition-all";
  const variants = {
    primary: "bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand",
    secondary: "bg-neutral-gray-100 text-neutral-gray-800 border border-neutral-gray-300 hover:bg-neutral-gray-200 focus-visible:ring-neutral-gray-400",
    ghost: "bg-transparent text-brand hover:bg-brand/10 focus-visible:ring-brand",
    outline: "bg-transparent text-brand border border-brand hover:bg-brand/10 focus-visible:ring-brand",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      type={type}
      className={clsx(base, variants[variant], sizes[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
