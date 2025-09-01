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
import { useAnimate } from "motion/react";
import { useEffect, useState } from "react";
import type { ContactsData, HeroData } from "@/lib/types";

interface Props {
  data?: HeroData;
  contacts?: ContactsData;
}

export default function Hero({ data, contacts }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { currentLang } = useLanguage();
  const year = new Date().getFullYear();

  const [scope, animate] = useAnimate();
  const duration = 0.6;
  useEffect(() => {
    // First course
    animate(
      ".first-name",
      { opacity: [0, 1], x: [-30, 0] },
      { duration: duration, delay: 0.2 },
    );
    animate(
      ".middle-name",
      { opacity: [0, 1], x: [30, 0] },
      { duration: duration, delay: 0.4 },
    );
    animate(
      ".hero-title",
      { opacity: [0, 1], x: [-30, 0] },
      { duration: duration, delay: 0.6 },
    );
    animate(
      ".hero-subtitle",
      { opacity: [0, 1], x: [30, 0] },
      { duration: duration, delay: 0.7 },
    );

    // Second course
    animate(
      ".hero-image",
      { opacity: [0, 1], scale: [0.96, 1] },
      { duration: 0.8, delay: 1.1 },
    );

    // Third course
    animate(
      ".action-text",
      { opacity: [0, 1], y: [50, 0] },
      { duration: duration, delay: 1.6 },
    );
    animate(
      ".action-section",
      { opacity: [0, 1], y: [50, 0] },
      { duration: duration, delay: 1.6 },
    );
    animate(".current-year", { opacity: [0, 1] }, { duration: 2, delay: 2 });
  }, [animate]);

  return (
    <section className="container mb-10 flex pt-10 pb-10 sm:mb-15 md:mb-20 md:min-h-[calc(100svh-5rem)] [@media(min-height:1080px)]:min-h-auto">
      <div ref={scope} className="relative flex-1">
        <div className="top-0 -left-5 z-1 min-[500px]:absolute min-[500px]:left-0">
          <div className="mb-5 flex flex-col leading-none">
            <div className="first-name font-anastasia -mb-4 text-7xl sm:text-8xl lg:text-[9.5rem] xl:-mb-8 xl:pr-10 xl:text-[10.6rem]">
              {data?.firstName[currentLang]}
            </div>
            <div className="middle-name flex-1 text-right text-[2.5rem] font-extralight uppercase sm:text-4xl lg:text-6xl xl:text-8xl">
              {data?.middleName[currentLang]}
            </div>
          </div>
          <div className="current-year pl-2 text-xl font-light md:text-2xl xl:pl-5">
            ({year})
          </div>
        </div>

        <p className="action-text absolute top-0 right-0 z-1 hidden max-w-[245px] text-2xl leading-none font-extralight uppercase md:block">
          {data?.actionText[currentLang]}
        </p>

        <div className="ibg pointer-events-none relative z-2 -mt-10 min-h-[23rem] min-[500px]:mt-0 min-[500px]:min-h-[36rem] md:min-h-[46rem]">
          <img
            src={import.meta.env.VITE_API_URL + data?.image}
            alt={
              data?.firstName[currentLang] + " " + data?.middleName[currentLang]
            }
            className={`hero-image object-contain object-bottom px-5 transition-opacity duration-500 sm:px-0 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            width={1408}
            height={736}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="from-background absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t to-transparent"></div>
        </div>

        <h1 className="absolute right-0 bottom-30 z-3 self-end pb-10 leading-none md:bottom-0 md:pt-20">
          <span className="hero-title -mb-5 block text-[2.5rem] font-extralight uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:-mb-10 xl:text-8xl">
            {data?.title[currentLang]}
          </span>
          <span className="hero-subtitle font-anastasia block pr-5 pl-10 text-7xl sm:pr-10 sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[10.6rem]">
            {data?.subtitle[currentLang]}
          </span>
        </h1>

        <div className="action-section relative bottom-0 left-0 z-4 pt-20 md:absolute md:pt-0">
          <div className="mb-5 max-w-52 leading-tight font-extralight md:max-w-40">
            <p className="hidden md:block">
              {data?.descriptionText[currentLang]}
            </p>
            <p className="uppercase md:hidden">
              {data?.actionText[currentLang]}
            </p>
          </div>

          <Drawer>
            <DrawerTrigger asChild className="drawer-btn">
              <Button className="min-h-12 min-w-60 text-2xl !font-normal">
                {data?.actionButtonText[currentLang]}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl leading-none font-extralight uppercase">
                    {data?.drawerTitle[currentLang]}
                  </DrawerTitle>
                  <DrawerDescription className="text-[1rem] font-light">
                    {data?.drawerSubitle[currentLang]}
                  </DrawerDescription>
                </DrawerHeader>
                <ul className="flex flex-col gap-4 p-4">
                  {contacts?.items.map((contact) => (
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
                    <Button variant="secondary" className="min-h-12 min-w-60">
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
