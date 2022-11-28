/* eslint-disable jsx-a11y/anchor-has-content */
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
} from "@remix-run/react";
import { cx } from "class-variance-authority";

export type Props = {
  to: string;
  isExternal?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement> &
  RemixLinkProps;

const linkStyle = cx(
  "font-bold text-green-400 transition-colors hover:text-green-600"
);

export default function Link({ to, isExternal, ...props }: Props) {
  if (isExternal) {
    return <a href={to} className={linkStyle} {...props} />;
  }

  return <RemixLink to={to} className={linkStyle} {...props} />;
}
