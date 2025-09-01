import { useFetchContent } from "@/hooks/useFetchContent";
import CaseCard from "./CaseCard";
import Reveal from "./Reveal";
import SectionTop from "./SectionTop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CasesData } from "@/lib/types";
import { useTranslation } from "react-i18next";
import LoadingError from "./LoadingError";

export default function Cases() {
  const { t } = useTranslation();
  const { data, status, error } =
    useFetchContent<CasesData>("content/cases.json");

  const casesData = data?.items ?? [];

  // ---- Status handling ----
  if (status === "error") {
    return (
      <section id="cases" className="container">
        <SectionTop>{t("cases.title")}</SectionTop>
        <Reveal>
          <LoadingError
            text="Error loading cases | Помилка завантаження кейсів"
            error={error}
          />
        </Reveal>
      </section>
    );
  }

  if (status === "loading") {
    return (
      <section id="cases" className="container">
        <SectionTop>{t("cases.title")}</SectionTop>
        <Reveal>
          <p className="opacity-60">{t("loading")}...</p>
        </Reveal>
      </section>
    );
  }

  if (!casesData.length) {
    return null; // nothing to show
  }

  // ---- Success ----
  return (
    <section id="cases" className="container">
      <Carousel
        opts={{ align: "start" }}
        className="max-[500px]:[&_.overflow-hidden]:!overflow-visible"
      >
        {/* Header */}
        <div className="flex flex-col justify-between min-[500px]:flex-row min-[500px]:gap-5">
          <SectionTop>{t("cases.title")}</SectionTop>

          {casesData.length > 1 && (
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
          )}
        </div>

        {/* Content */}
        <Reveal>
          <CarouselContent className="-ml-5">
            <CarouselItem className="hidden pl-5 md:basis-[45%] lg:basis-[40%] xl:block xl:basis-1/3" />
            {casesData.map((item, i) => (
              <CarouselItem
                key={item.link + i}
                className="basis-full pl-5 min-[500px]:basis-[80%] sm:basis-[55%] md:basis-[45%] lg:basis-[40%] xl:basis-1/3"
              >
                <CaseCard {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Reveal>
      </Carousel>
    </section>
  );
}
