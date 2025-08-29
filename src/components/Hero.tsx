import { useTranslation } from "react-i18next";
import ContactButton from "./ContactButton";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useLanguage } from "@/hooks/useLanguage";

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

export default function Hero() {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <section className="container mb-10 flex pt-30 pb-10 sm:mb-15 md:mb-20 md:min-h-svh [@media(min-height:1080px)]:min-h-auto">
      <div className="relative flex-1">
        <div className="top-0 -left-5 z-1 min-[500px]:absolute min-[500px]:left-0">
          <div className="mb-5 flex flex-col leading-none">
            <div className="font-anastasia -mb-4 text-7xl sm:text-8xl lg:text-[9.5rem] xl:-mb-8 xl:pr-10 xl:text-[10.6rem]">
              {t("common.firstName")}
            </div>
            <div className="flex-1 text-right text-[2.5rem] font-extralight uppercase sm:text-4xl lg:text-6xl xl:text-8xl">
              {t("common.middleName")}
            </div>
          </div>
          <div className="pl-2 text-xl font-light md:text-2xl xl:pl-5">
            ({year})
          </div>
        </div>

        <p className="absolute top-0 right-0 z-1 hidden max-w-[245px] text-2xl leading-none font-extralight uppercase md:block">
          {t("hero.action")}
        </p>

        <div className="ibg pointer-events-none relative z-2 -mt-10 min-h-[23rem] min-[500px]:mt-0 min-[500px]:min-h-[36rem] md:min-h-[46rem]">
          <img
            src="./images/hero.png"
            alt="Hutina Anastasiia"
            className="object-contain object-bottom px-5 sm:px-0"
            width={1408}
            height={736}
          />
          <div className="from-background absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t to-transparent"></div>
        </div>

        <h1 className="absolute right-0 bottom-30 z-3 self-end pb-10 leading-none md:bottom-0 md:pt-20">
          <span className="-mb-5 block text-[2.5rem] font-extralight uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:-mb-10 xl:text-8xl">
            {t("hero.title")}
          </span>
          <span className="font-anastasia block pr-5 pl-10 text-7xl sm:pr-10 sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[10.6rem]">
            {t("hero.subtitle")}
          </span>
        </h1>

        <div className="relative bottom-0 left-0 z-4 pt-20 md:absolute md:pt-0">
          <div className="mb-5 max-w-52 leading-tight font-extralight md:max-w-40">
            <p className="hidden md:block">{t("hero.description")}</p>
            <p className="uppercase md:hidden">{t("hero.action")}</p>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <Button className="min-h-12 min-w-60 text-2xl !font-normal">
                {currentLang === "en" ? "Advice" : "Порада"}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl leading-none font-extralight uppercase">
                    {currentLang === "en" ? "Ask me anything" : "Запити мене"}
                  </DrawerTitle>
                  <DrawerDescription className="font-light">
                    {currentLang === "en"
                      ? "I will answer you as soon as possible"
                      : "Я відповім вам найближчим часом"}
                  </DrawerDescription>
                </DrawerHeader>
                <ul className="flex flex-col gap-4 p-4">
                  {CONTACTS.map((contact) => (
                    <li key={contact.label}>
                      <ContactButton
                        {...contact}
                        className="min-h-12 w-full min-w-60"
                      />
                    </li>
                  ))}
                </ul>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="secondary" className="min-w-60">
                      {currentLang === "en" ? "Close" : "Закрити"}
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </section>
  );
}
