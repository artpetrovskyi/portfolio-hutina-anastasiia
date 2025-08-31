import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import SectionTop from "./SectionTop";
import type { AboutData } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

interface Props {
  data?: AboutData;
}

export default function About({ data }: Props) {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();

  const featuresList = data?.items ?? [];

  if (!featuresList.length) {
    return null;
  }

  return (
    <section id="about-me" className="container">
      <SectionTop>{t("about-me.title")}</SectionTop>

      <div className="md:pl-[20%]">
        <ul className="space-y-5">
          {featuresList.map(({ title, body }, i) => (
            <li key={title.en}>
              <Reveal
                className={`border-foreground border-b pt-5 pb-2 ${i === 0 && "border-t"}`}
              >
                <div className="relative flex gap-5 pt-16 sm:pt-20">
                  <h3 className="flex-[1_0_9.3rem] self-end text-xl font-extralight uppercase max-[425px]:absolute max-[425px]:-bottom-5 max-[425px]:left-0 max-[425px]:origin-[0_0] max-[425px]:rotate-[-90deg] sm:flex-[1_0_12.5rem] sm:text-3xl">
                    {title[currentLang]}
                  </h3>

                  <p className="flex-[0_1_50rem] max-[425px]:pl-12">
                    {body[currentLang]}
                  </p>

                  <CornerArrow />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CornerArrow() {
  return (
    <svg
      className="absolute top-0 right-0 h-9 w-9"
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 38 38"
      fill="none"
    >
      <path d="M37 38L37 1M37 1L1 1M37 1L1 37.075" stroke="white" />
    </svg>
  );
}
