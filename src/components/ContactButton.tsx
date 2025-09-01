import type { ContactItem } from "@/lib/types";
import { Button } from "./ui/button";

interface Props extends ContactItem {
  className?: string;
}

export default function ContactButton({
  link,
  title,
  icon,
  label,
  className,
}: Props) {
  return (
    <Button variant="outline" asChild className={className}>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 font-light"
      >
        {icon && (
          <img
            src={import.meta.env.VITE_API_URL + icon}
            alt={label}
            width={20}
            height={20}
            loading="lazy"
          />
        )}
        <span>{title}</span>
      </a>
    </Button>
  );
}
