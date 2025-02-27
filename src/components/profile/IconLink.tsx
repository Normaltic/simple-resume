import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { mergeClassNames } from "@/utils/mergeClassNames";

export interface IconLinkProps {
  className?: string;
  icon: IconDefinition;
  link: string;
  text?: string;
}

function IconLink({ className, icon, link, text }: IconLinkProps) {
  return (
    <div className={mergeClassNames("flex items-center gap-4", className)}>
      <FontAwesomeIcon width={16} height={16} icon={icon} />
      <a className="text-primary" target="_blank" href={link}>
        {text ?? link}
      </a>
    </div>
  );
}

export default IconLink;
