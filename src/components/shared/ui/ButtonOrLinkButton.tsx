import { Link } from "@remix-run/react";
import React from "react";

type ButtonOrLinkButtonProps = {
  to?: string;
  isExternal?: boolean;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a">;
export interface Props extends ButtonOrLinkButtonProps {}

export default function ButtonOrLinkButton({
  to,
  isExternal,
  ...props
}: Props) {
  const isLink = typeof to !== "undefined";
  const buttonComponent = <button {...props} />;

  if (isLink && isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer">
        {buttonComponent}
      </a>
    );
  } else if (isLink) {
    return <Link to={to}>{buttonComponent}</Link>;
  }

  return buttonComponent;
}
