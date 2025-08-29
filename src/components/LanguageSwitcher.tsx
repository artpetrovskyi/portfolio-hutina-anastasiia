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
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function LanguageSwitcher() {
  const { currentLang, changeLanguage, toggleLanguage } = useLanguage();
  const languages = locales;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden min-[800px]:block">
        <button
          onClick={() => toggleLanguage()}
          className="flex cursor-pointer flex-row-reverse"
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
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-1">
              <span className="text-xl font-light uppercase">
                {currentLang}
              </span>
              <span className="sr-only">Language toggle</span>
              <ChevronDown className="size-5" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="center" className="w-auto">
            {languages
              .filter((lang) => lang !== currentLang)
              .map((lang) => (
                <DropdownMenuItem
                  key={lang}
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      changeLanguage(lang);
                    }, 0);
                  }}
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
