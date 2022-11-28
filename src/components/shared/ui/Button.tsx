import { Link } from "@remix-run/react";
import { Button as RocinanteButton } from "@rocinante/ui/dist/";
import type { VariantProps } from "class-variance-authority";
import React from "react";

type ButtonProps = {
  to?: string;
  isExternal?: boolean;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a"> &
  VariantProps<typeof RocinanteButton>;

export interface Props extends ButtonProps {}

export default function Button({ to, isExternal, ...props }: Props) {
  const isLink = typeof to !== "undefined";
  const buttonComponent = <RocinanteButton {...props} />;

  if (isLink && isExternal) {
    return <a href={to}>{buttonComponent}</a>;
  } else if (isLink) {
    return <Link to={to}>{buttonComponent}</Link>;
  }

  return buttonComponent;
}
