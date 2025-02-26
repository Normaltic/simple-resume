import { mergeClassNames } from "@/utils/mergeClassNames";

export interface TechBadgeProps {
  className?: string;
  children: string;
}

function TechBadge({ className, children }: TechBadgeProps) {
  return (
    <span
      className={mergeClassNames(
        "inline-block italic font-normal whitespace-nowrap text-[0.75rem] pl-[0.4rem] pr-[0.5rem] bg-gray-500 text-background rounded-[0.4rem]",
        className
      )}
    >
      {children}
    </span>
  );
}

export default TechBadge;
