import { mergeClassNames } from "@/utils/mergeClassNames";

export type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

function Anchor({ className, children, ...props }: AnchorProps) {
  return (
    <a
      className={mergeClassNames(
        "text-gray-500 border-b border-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default Anchor;
