import CaseCard, { OfferCard } from "./CaseCard";
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
    title: "Santehprostir text",
    image: "santehprostir.jpg",
    body: "UX/UI of a platform for selling plumbing equipment — a complex multi-page structure",
    href: "#",
    wide: true,
  },
  {
    title: "Barbara Palvin",
    image: "barbara-palvin.jpg",
    body: "Landing design for a fashion brand with an emphasis on atmosphere",
    href: "#",
  },
  {
    title: "SantehProstir",
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
    title: "SantehProstir",
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
];

const OFFERS = [
  {
    title: "Landing  ",
    image: "ai-smm-assistant.jpg",
    body: "Design of an AI SMM assistant for a marketing company",
  },
  {
    title: "State website",
    image: "ministry-of-economy.jpg",
    body: "Ux/Ui design website  of the Ministry of Economy of Ukraine",
  },
];

export default function Cases() {
  return (
    <section className="container">
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-[500px]:[&_.overflow-hidden]:!overflow-visible"
      >
        {/* Top */}
        <div className="flex flex-col justify-between min-[500px]:flex-row min-[500px]:gap-5">
          <SectionTop>Cases</SectionTop>
          <div className="mb-6 flex items-end gap-5 min-[500px]:mb-10">
            <CarouselPrevious
              variant="secondary"
              className="bg-gradient static translate-0 rounded-none border border-white px-10 max-[500px]:flex-1"
            />
            <CarouselNext
              variant="secondary"
              className="bg-gradient static translate-0 rounded-none border border-white px-10 max-[500px]:flex-1"
            />
          </div>
        </div>

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
      </Carousel>

      <div className="border-foreground border- mt-10 border-t pt-10">
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {/* <li></li> */}
          {OFFERS.map((item) => (
            <li key={item.title}>
              <OfferCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
