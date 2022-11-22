/* eslint-disable jsx-a11y/anchor-has-content */
import { cx } from "class-variance-authority";
import {
  Link as RemixLink,
  type LinkProps as RemixLinkProps,
} from "@remix-run/react";

export type Props = React.HTMLAttributes<HTMLAnchorElement> & RemixLinkProps;

export default function Link({ ...props }: Props) {
  return (
    <RemixLink
      className={cx(
        "font-bold text-green-400 transition-colors hover:text-green-600"
      )}
      {...props}
    />
  );
}
