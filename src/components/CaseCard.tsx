import { useLanguage } from "@/hooks/useLanguage";
import type { CaseItem } from "@/lib/types";

export default function CaseCard({ title, image, body, link }: CaseItem) {
  const { currentLang } = useLanguage();

  return (
    <div className="group relative">
      <div className="ibg relative mb-2 flex h-[21rem] overflow-hidden">
        <img
          src={import.meta.env.VITE_API_URL + image}
          alt={title[currentLang]}
          className="h-full w-full object-cover blur-[2px] transition group-hover:blur-none"
          width={441}
          height={336}
          loading="lazy"
        />
        <span className="bg-background absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-40" />
        <span className="font-anastasia pointer-events-none absolute inset-0 z-10 -ml-4 flex items-center justify-center p-5 text-center text-6xl leading-none text-white xl:text-[5rem]">
          {title[currentLang]}
        </span>
      </div>

      <p>{body[currentLang]}</p>

      <a
        target="_blank"
        href={link}
        aria-label={title[currentLang]}
        className="absolute inset-0"
      />
    </div>
  );
}
