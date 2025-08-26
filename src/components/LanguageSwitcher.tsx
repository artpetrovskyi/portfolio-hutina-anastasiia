import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { locales } from "@/lib/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import React from "react";

export function LanguageSwitcher() {
  const { currentLang, changeLanguage, toggleLanguage } = useLanguage();
  const languages = locales;

  return (
    <>
      <div className="hidden min-[800px]:block">
        <button
          onClick={() => toggleLanguage()}
          className="flex flex-row-reverse"
        >
          {languages.map((lang, i) => (
            <React.Fragment key={lang}>
              <span
                className={cn(
                  "uppercase opacity-50 transition-opacity duration-200",
                  lang === currentLang && "opacity-100",
                )}
              >
                {lang}
              </span>
              {i < languages.length - 1 && <span className="mx-2">/</span>}
            </React.Fragment>
          ))}
        </button>
      </div>

      <div className="block min-[800px]:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1">
              <span className="text-xl font-light uppercase">
                {currentLang}
              </span>
              <span className="sr-only">Language toggle</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center" className="w-auto">
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang}
                onClick={() => changeLanguage(lang)}
                className="justify-center text-xl uppercase"
              >
                <span>{lang}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

{
  /* <Button
  variant="secondary"
  onClick={toggleLanguage}
  className="flex items-center gap-2"
>
  {languages.map((lang) => (
    <span
      key={lang}
      className={cn(
        "uppercase opacity-50 transition-opacity duration-200",
        lang === currentLang && "opacity-100",
      )}
    >
      {lang}
    </span>
  ))}
</Button>; */
}
