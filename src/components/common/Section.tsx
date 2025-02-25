import { mergeClassNames } from "@/utils/mergeClassNames";
import Header3 from "./Header3";

export interface SectionProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

function Section({ className, title, children }: SectionProps) {
  return (
    <section className={mergeClassNames("my-8", className)}>
      {title && (
        <Header3 className="flex items-center mb-4 text-primary after:content-[' '] after:ml-6 after:border-t-[1px] after:border-gray-300 after:flex-1">
          {title}
        </Header3>
      )}
      {children}
    </section>
  );
}

export default Section;
