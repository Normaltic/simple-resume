import { mergeClassNames } from "@/utils/mergeClassNames";
import Image from "next/image";

export interface IconLinkProps {
  className?: string;
  iconUrl: string;
  link: string;
  text?: string;
}

function IconLink({ className, iconUrl, link, text }: IconLinkProps) {
  return (
    <div className={mergeClassNames("flex items-center gap-4", className)}>
      <Image src={iconUrl} width={15} height={15} alt="Icon" />
      <a className="text-primary" target="_blank" href={link}>
        {text ?? link}
      </a>
    </div>
  );
}

export default IconLink;
