import { mergeClassNames } from "@/utils/mergeClassNames";

export interface IconLinkProps {
  className?: string;
  icon: React.JSX.ElementType;
  link: string;
  text?: string;
}

function IconLink({ className, icon: Icon, link, text }: IconLinkProps) {
  return (
    <div className={mergeClassNames("flex items-center gap-4", className)}>
      <Icon
        className="fill-foreground linear-transition-color"
        width={16}
        height={16}
      />
      <a className="text-primary" target="_blank" href={link}>
        {text ?? link}
      </a>
    </div>
  );
}

export default IconLink;
