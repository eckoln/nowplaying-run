/* eslint-disable jsx-a11y/anchor-has-content */
import { cx } from "class-variance-authority";
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
} from "@remix-run/react";

export type Props = {
  to: string;
  isExternal?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement> &
  RemixLinkProps;

export default function Link({ to, isExternal, ...props }: Props) {
  if (isExternal) {
    return (
      <a
        href={to}
        className={cx(
          "font-bold text-green-400 transition-colors hover:text-green-600"
        )}
        {...props}
      />
    );
  }

  return (
    <RemixLink
      to={to}
      className={cx(
        "font-bold text-green-400 transition-colors hover:text-green-600"
      )}
      {...props}
    />
  );
}
