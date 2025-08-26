import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NAV_LINKS = [
  {
    anchor: "about-me",
    title: "About me",
  },
  {
    anchor: "cases",
    title: "Cases",
  },
  {
    anchor: "contacts",
    title: "Contacts",
  },
] as const;

export default function Header() {
  return (
    <header className="bg-background">
      <div className="container flex items-center py-5 text-xl md:gap-5 md:text-2xl">
        <div className="order-1 flex-1">
          <a
            href="/"
            onClick={(e) => e.preventDefault()}
            className="whitespace-nowrap uppercase"
          >
            Hutina Anastasiia
          </a>
        </div>

        <nav className="order-2 hidden min-[800px]:block">
          <ul className="flex gap-5">
            {NAV_LINKS.map(({ anchor, title }) => (
              <li key={anchor}>
                <Link
                  to={anchor}
                  href={`#${anchor}`}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  className="uppercase"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="order-3 block min-[800px]:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
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
                  className="size-6"
                >
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                  <path d="M3 6h18" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent className="w-auto">
              <SheetTitle className="hidden">Menu</SheetTitle>
              <SheetDescription className="hidden">Menu</SheetDescription>
              <ul className="flex flex-col items-end gap-5 px-6 py-20 pb-10">
                {NAV_LINKS.map(({ anchor, title }) => (
                  <li key={anchor}>
                    <Link
                      to={anchor}
                      href={`#${anchor}`}
                      offset={-50}
                      smooth={true}
                      duration={500}
                      className="text-xl uppercase"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </nav>

        <div className="order-2 ml-5">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
