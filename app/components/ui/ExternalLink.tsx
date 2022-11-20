/* eslint-disable jsx-a11y/anchor-has-content */
import { cx } from "class-variance-authority";

type Props = React.ComponentProps<"a">;

const linkStyles = cx(
  "transition-colors hover:text-green-600 font-bold text-green-400"
);

export default function ExternalLink({ ...props }: Props) {
  //const Component = isExternal ? "a" : "Link";

  return <a className={linkStyles} {...props} />;
}
