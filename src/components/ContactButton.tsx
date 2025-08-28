import { Button } from "./ui/button";

interface Props {
  href: string;
  title: string;
  icon: string;
  className?: string;
}

export default function ContactButton({ href, title, icon, className }: Props) {
  return (
    <Button variant="outline" asChild className={className}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-4 font-light"
      >
        <img
          src={`./images/icons/${icon}`}
          alt={title}
          width={20}
          height={20}
        />
        <span>{title}</span>
      </a>
    </Button>
  );
}
