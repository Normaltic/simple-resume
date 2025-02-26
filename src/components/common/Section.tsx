import { mergeClassNames } from "@/utils/mergeClassNames";

export interface SectionProps {
  className?: string;
  title?: string;
  children: React.ReactNode;
}

function Section({ className, title, children }: SectionProps) {
  return (
    <section className={mergeClassNames("my-16", className)}>
      {title && (
        <h2 className="text-3xl flex items-center mb-8 text-primary after:content-[' '] after:ml-6 after:border-t-[1px] after:border-gray-300 after:flex-1">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

export default Section;
