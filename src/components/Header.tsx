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
import { useState } from "react";
import { AlignJustify } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "motion/react";

const NAV_LINKS = [
  {
    anchor: "about-me",
    title: {
      en: "About me",
      uk: "Про мене",
    },
  },
  {
    anchor: "cases",
    title: {
      en: "Cases",
      uk: "Кейсы",
    },
  },
  {
    anchor: "contacts",
    title: {
      en: "Contacts",
      uk: "Контакти",
    },
  },
] as const;

const CONTACTS = [
  {
    label: "telegram",
    title: "@anastasiahutina",
    href: "https://t.me/anastasiahutina",
    icon: "telegram.svg",
  },
  {
    label: "behance",
    title: "Anastasiia Hutina",
    href: "https://www.behance.net/anastasiiahutina",
    icon: "behance.svg",
  },
  {
    label: "whatsapp",
    title: "+380 67 010 33 77",
    href: "tel:+380670103377",
    icon: "whatsapp.svg",
  },
  {
    label: "instagram",
    title: "@steisi.design",
    href: "https://instagram.com/steisi.design",
    icon: "instagram.svg",
  },
  {
    label: "email",
    title: "Hutinaanastasiia@ukr.net",
    href: "mailto:Hutinaanastasiia@ukr.net",
    icon: "email.svg",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { currentLang } = useLanguage();

  return (
    <header className="bg-background absolute top-0 left-0 z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="container flex items-center py-5 text-xl md:gap-5 md:text-2xl"
      >
        <div className="order-1 flex-1">
          <a
            href={import.meta.env.VITE_API_URL}
            className="whitespace-nowrap uppercase"
          >
            Hutina Anastasiia
          </a>
        </div>

        <nav className="order-2 hidden min-[800px]:block">
          <ul className="flex gap-5">
            {NAV_LINKS.map(({ anchor, title }) => (
              <li key={anchor}>
                <Button asChild variant="link" className="px-0">
                  <Link
                    to={anchor}
                    href={`#${anchor}`}
                    offset={-50}
                    smooth={true}
                    duration={500}
                    className="uppercase"
                  >
                    {title[currentLang]}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-3 block min-[800px]:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <AlignJustify className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex gap-10 overflow-auto px-6 py-30 pb-10">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Menu</SheetDescription>
              <nav className="flex-1">
                <ul className="flex flex-col items-end gap-10">
                  {NAV_LINKS.map(({ anchor, title }) => (
                    <li key={anchor}>
                      <Link
                        to={anchor}
                        href={`#${anchor}`}
                        offset={-50}
                        smooth={true}
                        duration={500}
                        className="text-3xl uppercase"
                        onClick={() => setOpen(false)}
                      >
                        {title[currentLang]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <ul className="space-y-5">
                {CONTACTS.map((contact) => (
                  <li key={contact.label}>
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="w-full"
                    >
                      <a href={contact.href} target="_blank" rel="noreferrer">
                        <img
                          src={`./images/icons/${contact.icon}`}
                          alt={contact.title}
                        />
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <div className="order-2 ml-5">
          <LanguageSwitcher />
        </div>
      </motion.div>
    </header>
  );
}
