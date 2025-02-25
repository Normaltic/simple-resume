import { mergeClassNames } from "@/utils/mergeClassNames";

export interface UnorderedListProps extends React.HTMLProps<HTMLUListElement> {
  items: string[];
}

function UnorderedList({ items, className, ...props }: UnorderedListProps) {
  return (
    <ul
      className={mergeClassNames(
        "list-inside list-disc [&>li:nth-child(n+1)]:mt-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default UnorderedList;
