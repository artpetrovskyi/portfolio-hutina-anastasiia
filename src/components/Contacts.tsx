import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import SectionTop from "./SectionTop";
import { Button } from "./ui/button";
import Reveal from "./Reveal";
import { useTranslation } from "react-i18next";
import type { ContactsData } from "@/lib/types";

interface Props {
  contacts?: ContactsData;
}

export default function Contacts({ contacts }: Props) {
  const { t } = useTranslation();

  const contactsList = contacts?.items ?? [];

  if (!contactsList.length) {
    return null;
  }

  return (
    <section id="contacts" className="container">
      <SectionTop>{t("contacts.title")}</SectionTop>

      <ul className="flex flex-col flex-wrap gap-1 min-[500px]:flex-row min-[500px]:gap-5">
        {contactsList.map((contact, i) => (
          <li
            key={contact.label}
            className={cn(
              "flex-1",
              i === contactsList.length - 1 &&
                "flex-[1_1_100%] text-right text-3xl font-extralight uppercase max-[500px]:pt-1 max-[500px]:text-left max-[500px]:text-xl",
            )}
          >
            {i === contactsList.length - 1 ? (
              <Reveal>
                <Button asChild variant="link" className="px-0">
                  <a href={contact.link}>{contact.title}</a>
                </Button>
              </Reveal>
            ) : (
              <Reveal>
                <ContactButton
                  {...contact}
                  className="min-h-[4.375rem] min-w-60 !border-white max-[500px]:min-h-12 max-[500px]:justify-start max-[500px]:border-none max-[500px]:px-1 min-[500px]:w-full"
                />
              </Reveal>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
