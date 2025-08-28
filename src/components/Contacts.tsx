import { cn } from "@/lib/utils";
import ContactButton from "./ContactButton";
import SectionTop from "./SectionTop";
import { Button } from "./ui/button";

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
    <section className="container">
      <SectionTop>Contacts</SectionTop>

      <ul className="flex flex-col flex-wrap min-[500px]:gap-5 gap-1 min-[500px]:flex-row">
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
              <Button asChild variant="link" className="px-0">
                <a href={contact.href}>{contact.title}</a>
              </Button>
            ) : (
              <ContactButton
                {...contact}
                className="min-h-[4.375rem] min-[500px]:w-full min-w-60 !border-white max-[500px]:justify-start max-[500px]:border-none max-[500px]:px-0 max-[500px]:min-h-12"
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
