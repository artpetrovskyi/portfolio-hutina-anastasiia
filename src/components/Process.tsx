import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";
import SectionTop from "./SectionTop";
import type { ProcessData } from "@/lib/types";
import { useLanguage } from "@/hooks/useLanguage";

interface Props {
  data?: ProcessData;
}

export default function Process({ data }: Props) {
  const { t } = useTranslation();
  const { currentLang } = useLanguage();
  const processList = data?.items ?? [];

  if (!processList.length) {
    return null;
  }

  const columnClasses = [
    "md:col-start-1 md:col-span-5 lg:col-start-7 lg:col-span-4",
    "md:col-start-6 md:col-span-4 lg:col-start-11 lg:col-span-2",

    "md:col-start-1 md:col-span-5 lg:col-start-3 lg:col-span-4",
    "md:col-start-6 md:col-span-4 lg:col-start-7 lg:col-span-2",
    "md:col-start-1 md:col-span-5 lg:col-start-11 lg:col-span-2",

    "md:col-start-6 md:col-span-4 lg:col-start-5 lg:col-span-4",
  ];

  return (
    <section className="container">
      <SectionTop>{t("my-process.title")}</SectionTop>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-9 lg:grid-cols-12 [&>li]:min-h-64">
        {/* Static text in first slot */}
        <li
          className={`flex !min-h-auto items-center md:col-span-6 md:block xl:col-start-1`}
        >
          <Reveal>
            <p className="max-w-72 text-2xl leading-none font-extralight uppercase xl:max-w-60">
              {data?.mainDescription[currentLang]}
            </p>
          </Reveal>
        </li>

        {processList
          .slice(0, columnClasses.length)
          .map(({ title, body }, i) => (
            <li key={title.en} className={columnClasses[i]}>
              <Reveal className="h-full">
                <div className="flex h-full flex-col border border-white p-3 leading-tight">
                  <div className="mb-2 text-4xl font-extralight sm:text-5xl">
                    {`/0${i + 1}`}
                  </div>
                  <h3 className="mb-3 flex-1 text-xl font-extralight uppercase sm:text-3xl">
                    {title[currentLang]}
                  </h3>
                  <p>{body[currentLang]}</p>
                </div>
              </Reveal>
            </li>
          ))}
      </ul>
    </section>
  );
}
