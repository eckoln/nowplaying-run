import { Link } from "@remix-run/react";
import React from "react";

type ButtonOrLinkButtonProps = {
  to?: string | object;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a">;
export interface Props extends ButtonOrLinkButtonProps {}

export default function ButtonOrLinkButton({ to, ...props }: Props) {
  const isLink = typeof to !== "undefined";
  const buttonComponent = <button {...props} />;

  if (isLink) {
    return <Link to={to}>{buttonComponent}</Link>;
  }

  return buttonComponent;
}
