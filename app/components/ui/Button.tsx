import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none text-sm text-center disabled:opacity-30 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        filled: "text-white bg-green-500 hover:bg-green-700",
        ghost: "text-white bg-transparent hover:bg-white/5",
        overlayUrl: "bg-black/20 border border-black/20 hover:bg-black/50",
      },
      size: {
        sm: "px-3 py-2",
        md: "py-3 px-4",
      },
      fullWidth: { true: "w-full" },
    },
    defaultVariants: {
      variant: "filled",
      size: "sm",
    },
  }
);

export interface Props
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  size,
  fullWidth,
  className,
  ...props
}: Props) {
  return (
    <button
      className={buttonStyles({
        variant,
        size,
        fullWidth,
        className,
      })}
      {...props}
    />
  );
}
