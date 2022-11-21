import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import type { Props as ButtonOrLinkButtonProps } from "@/ui/ButtonOrLinkButton";
import ButtonOrLinkButton from "@/ui/ButtonOrLinkButton";

const buttonStyles = cva(
  "inline-flex w-fit items-center justify-center rounded-xl font-semibold transition-colors focus:outline-none text-sm text-center disabled:opacity-30 disabled:cursor-not-allowed space-x-2",
  {
    variants: {
      variant: {
        filled: "text-white bg-green-500 hover:bg-green-700",
        ghost: "text-white bg-transparent hover:bg-white/5",
        copyToUrl: "bg-black/20 border border-black/20 hover:bg-black/50",
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

type ButtonProps = {
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
};

export interface Props
  extends ButtonProps,
    ButtonOrLinkButtonProps,
    VariantProps<typeof buttonStyles> {}

export default function Button({
  variant,
  size,
  fullWidth,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}: Props) {
  const StartIconComponent = startIcon;
  const EndIconComponent = endIcon;

  return (
    <ButtonOrLinkButton
      className={buttonStyles({
        variant,
        size,
        fullWidth,
        className,
      })}
      {...props}
    >
      {StartIconComponent && (
        <span>
          <StartIconComponent className="h-5 w-5" />
        </span>
      )}
      <span>{children}</span>
      {EndIconComponent && (
        <span>
          <EndIconComponent className="h-5 w-5" />
        </span>
      )}
    </ButtonOrLinkButton>
  );
}
