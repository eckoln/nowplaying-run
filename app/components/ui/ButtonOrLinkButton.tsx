/* eslint-disable jsx-a11y/anchor-has-content */
import { Link, type LinkProps } from "@remix-run/react";
import React from "react";

type ButtonOrLinkButtonProps = React.ComponentProps<"button"> & LinkProps;
export interface Props extends ButtonOrLinkButtonProps {}

export default function ButtonOrLinkButton({ to, ...props }: Props) {
  const isLink = typeof to !== "undefined";
  const buttonComponent = <button {...props} />;

  if (isLink) {
    return <Link to={to}>{buttonComponent}</Link>;
  }

  return buttonComponent;
}
