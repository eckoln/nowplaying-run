import { Link } from "@remix-run/react";
import { Button as RocinanteButton } from "@rocinante/ui/dist/";

type ButtonProps = {
  to?: string;
  external?: boolean;
} & React.ComponentProps<"button"> &
  React.ComponentProps<"a"> &
  React.ComponentProps<typeof RocinanteButton>;

export interface Props extends ButtonProps {}

export default function Button({ to, external, ...props }: Props) {
  const isLink = typeof to !== "undefined";
  const buttonComponent = <RocinanteButton {...props} />;

  if (isLink && external) {
    return <a href={to}>{buttonComponent}</a>;
  } else if (isLink) {
    return <Link to={to}>{buttonComponent}</Link>;
  }

  return buttonComponent;
}
