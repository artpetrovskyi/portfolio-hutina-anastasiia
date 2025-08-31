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
import type { ContactsData } from "@/lib/types";

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

interface Props {
  contacts?: ContactsData;
}

export default function Header({ contacts }: Props) {
  const [open, setOpen] = useState(false);
  const { currentLang } = useLanguage();
  const contactsList = contacts?.items || [];

  // For navigation
  const navListVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3, //  wait before starting stagger
        staggerChildren: 0.15,
      },
    },
  };
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // For contacts
  const contactsListVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.6, //  wait before starting stagger
        staggerChildren: 0.15,
      },
    },
  };

  const contactsItemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-background z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
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

        <div className="order-3 flex items-center min-[800px]:hidden">
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
                <motion.ul
                  className="flex flex-col items-end gap-10"
                  variants={navListVariants}
                  initial="hidden"
                  animate={open ? "show" : "hidden"} // trigger animation on open
                >
                  {NAV_LINKS.map(({ anchor, title }) => (
                    <motion.li key={anchor} variants={navItemVariants}>
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
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
              <motion.ul
                variants={contactsListVariants}
                initial="hidden"
                animate={open ? "show" : "hidden"}
                className="space-y-5"
              >
                {contactsList.map((contact) => (
                  <motion.li
                    variants={contactsItemVariants}
                    key={contact.label}
                  >
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="min-h-12 w-full"
                    >
                      <a href={contact.link} target="_blank" rel="noreferrer">
                        <img
                          src={import.meta.env.VITE_API_URL + contact.icon}
                          alt={contact.title}
                        />
                      </a>
                    </Button>
                  </motion.li>
                ))}
              </motion.ul>
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
