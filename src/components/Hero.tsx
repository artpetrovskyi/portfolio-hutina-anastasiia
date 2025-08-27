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
  const year = new Date().getFullYear();
  const text = "I create designs that don't just look good, they work.";

  return (
    <section className="container flex pt-30 pb-10 md:min-h-svh [@media(min-height:1080px)]:min-h-auto">
      <div className="relative flex-1">
        <div className="top-0 -left-5 z-1 min-[500px]:absolute min-[500px]:left-0">
          <div className="mb-5 flex flex-col leading-none">
            <div className="font-anastasia -mb-4 text-7xl sm:text-8xl lg:text-[9.5rem] xl:-mb-8 xl:pr-10 xl:text-[10.6rem]">
              Anastasiia
            </div>
            <div className="flex-1 text-right text-[2.5rem] font-extralight uppercase sm:text-4xl lg:text-6xl xl:text-8xl">
              Sergiyevna
            </div>
          </div>
          <div className="pl-2 text-xl font-light md:text-2xl xl:pl-5">
            ({year})
          </div>
        </div>

        <p className="absolute top-0 right-0 z-1 hidden max-w-[245px] text-2xl leading-none font-extralight uppercase md:block">
          {text}
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

        <div className="absolute right-0 bottom-30 z-3 self-end pb-10 leading-none md:bottom-0 md:pt-20">
          <div className="-mb-5 text-[2.5rem] font-extralight uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:-mb-10 xl:text-8xl">
            UX/UI
          </div>
          <div className="font-anastasia pr-5 pl-10 text-7xl sm:pr-10 sm:text-8xl md:text-9xl lg:text-[9.5rem] xl:text-[10.6rem]">
            Designer
          </div>
        </div>

        <div className="relative bottom-0 left-0 z-4 pt-20 md:absolute md:pt-0">
          <div className="mb-5 max-w-52 leading-tight font-extralight md:max-w-40">
            <p className="hidden md:block">
              Designs that make people feel before they think.
            </p>
            <p className="uppercase md:hidden">{text}</p>
          </div>

          <Drawer>
            <DrawerTrigger asChild>
              <Button className="text-2xl min-w-60">Advice</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className="text-2xl leading-none font-extralight uppercase">Ask me anything</DrawerTitle>
                  <DrawerDescription className="font-light">
                    Let's get in touch!
                  </DrawerDescription>
                </DrawerHeader>
                <ul className="flex flex-col gap-4 p-4">
                  {CONTACTS.map(({ label, title, href, icon }) => (
                    <li key={label}>
                      <Button
                        variant="outline"
                        asChild
                        className="w-full min-w-60"
                      >
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-4 font-light"
                        >
                          <img
                            src={`./images/icons/${icon}`}
                            alt={title}
                            width={20}
                            height={20}
                          />
                          <span> {title}</span>
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="secondary" className="min-w-60">
                      Cancel
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
