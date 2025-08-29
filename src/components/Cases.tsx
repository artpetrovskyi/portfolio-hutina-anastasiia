import CaseCard, { OfferCard } from "./CaseCard";
import Reveal from "./Reveal";
import SectionTop from "./SectionTop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CASES = [
  {
    title: "Santehprostir",
    image: "santehprostir.jpg",
    body: "UX/UI of a platform for selling plumbing equipment — a complex multi-page structure",
    href: "#",
  },
  {
    title: "Barbara Palvin",
    image: "barbara-palvin.jpg",
    body: "Landing design for a fashion brand with an emphasis on atmosphere",
    href: "#",
  },
  {
    title: "AI assistant",
    image: "ai-smm-assistant.jpg",
    body: "Design of an AI SMM assistant for a marketing company",
    href: "#",
  },
  {
    title: "Ministry of Economy",
    image: "ministry-of-economy.jpg",
    body: "Ux/Ui design website  of the Ministry of Economy of Ukraine",
    href: "#",
  },
];

const SERVICES = [
  {
    title: "Landing pages",
    image: "ai-smm-assistant.jpg",
    body: "I create high-converting landing pages that capture attention from the first click and effectively turn visitors into customers.",
  },
  {
    title: "Portfolios",
    image: "ministry-of-economy.jpg",
    body: "I design visually stunning and functional portfolios that best showcase your achievements and professional skills.",
  },
  {
    title: "Mobile",
    image: "santehprostir.jpg",
    body: "I design intuitive and aesthetic mobile user interfaces that ensure a seamless user experience and boost engagement.",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="container">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-[500px]:[&_.overflow-hidden]:!overflow-visible"
      >
        {/* Top */}
        <div className="flex flex-col justify-between min-[500px]:flex-row min-[500px]:gap-5">
          <SectionTop>Cases</SectionTop>
          <Reveal className="mt-auto">
            <div className="mb-6 flex items-end gap-5 min-[500px]:mb-10">
              <CarouselPrevious
                variant="secondary"
                className="bg-gradient static min-h-12 translate-0 rounded-none border border-white px-10 max-[500px]:flex-1 lg:-translate-y-5"
              />
              <CarouselNext
                variant="secondary"
                className="bg-gradient static min-h-12 translate-0 rounded-none border border-white px-10 max-[500px]:flex-1 lg:-translate-y-5"
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <CarouselContent className="-ml-5">
            <CarouselItem className="hidden pl-5 md:basis-[45%] lg:basis-[40%] xl:block xl:basis-1/3"></CarouselItem>
            {CASES.map((item) => (
              <CarouselItem
                key={item.title}
                className="basis-full pl-5 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
              >
                <CaseCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Reveal>
      </Carousel>

      <Reveal>
        <div className="border-foreground border- mt-10 border-t pt-10">
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {/* <li></li> */}
            {SERVICES.map((item) => (
              <li key={item.title}>
                <OfferCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
