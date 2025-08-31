import { Button } from "./ui/button";

interface Props {
  link: string;
  title: string;
  icon?: string;
  className?: string;
}

export default function ContactButton({ link, title, icon, className }: Props) {
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
            alt={title}
            width={20}
            height={20}
          />
        )}
        <span>{title}</span>
      </a>
    </Button>
  );
}
