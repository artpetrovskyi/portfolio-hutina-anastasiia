import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import SectionTop from "./SectionTop";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

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

export default function Contacts() {
  return (
    <section id="contacts" className="container">
      <SectionTop>Contacts</SectionTop>

      <ul className="flex flex-col flex-wrap gap-1 min-[500px]:flex-row min-[500px]:gap-5">
        {CONTACTS.map((contact, i) => (
          <li
            key={contact.label}
            className={cn(
              "flex-1",
              i === CONTACTS.length - 1 &&
                "flex-[1_1_100%] text-right text-3xl font-extralight uppercase max-[500px]:pt-1 max-[500px]:text-left max-[500px]:text-xl",
            )}
          >
            {i === CONTACTS.length - 1 ? (
              <Reveal>
                <Button asChild variant="link" className="px-0">
                  <a href={contact.href}>{contact.title}</a>
                </Button>
              </Reveal>
            ) : (
              <Reveal>
                <ContactButton
                  {...contact}
                  className="min-h-[4.375rem] min-w-60 !border-white max-[500px]:min-h-12 max-[500px]:justify-start max-[500px]:border-none max-[500px]:px-0 min-[500px]:w-full"
                />
              </Reveal>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
