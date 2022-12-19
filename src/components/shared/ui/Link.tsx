/* eslint-disable jsx-a11y/anchor-has-content */
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
} from "@remix-run/react";

export type Props = {
  to: string;
  external?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement> &
  RemixLinkProps;

export default function Link({ to, external, ...props }: Props) {
  const linkStyle =
    "font-bold text-green-400 transition-colors hover:text-green-600";

  if (external) {
    return <a href={to} className={linkStyle} {...props} />;
  }

  return <RemixLink to={to} className={linkStyle} {...props} />;
}
