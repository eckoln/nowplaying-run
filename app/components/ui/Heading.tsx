import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const headingStyles = cva("font-bold !leading-snug", {
  variants: {
    variant: {
      h1: "text-4xl tablet:text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
    },
    defaultVariants: {
      variant: "h6",
    },
  },
});

type HeadingProps = {
  as: React.ElementType;
} & React.HTMLAttributes<HTMLHeadingElement>;

export interface Props
  extends HeadingProps,
    VariantProps<typeof headingStyles> {}

export default function Heading({ variant, as, className, ...props }: Props) {
  const Component = variant ?? as;
  return (
    <Component className={headingStyles({ variant, className })} {...props} />
  );
}
