import { useFetchContent } from "@/hooks/useFetchContent";
import CaseCard from "./CaseCard";
import Reveal from "./Reveal";
import SectionTop from "./SectionTop";
import type { CasesData } from "@/lib/types";
import { useTranslation } from "react-i18next";
import LoadingError from "./LoadingError";

export default function Cases() {
  const { t } = useTranslation();
  const { data, status, error } =
    useFetchContent<CasesData>("content/cases.json");

  const casesList = data?.items ?? [];

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
          <p className="opacity-60">{t("common.loading")}</p>
        </Reveal>
      </section>
    );
  }

  if (!casesList.length) {
    return null; // nothing to show
  }

  const columnClasses = [
    "md:col-start-1 md:col-span-5 lg:col-start-4 lg:col-span-5",
    "md:col-start-6 md:col-span-4 lg:col-start-9 lg:col-span-4",

    "md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-5",
    "md:col-start-6 md:col-span-4 lg:col-start-9 lg:col-span-4",

    "md:col-start-1 md:col-span-5 lg:col-start-1 lg:col-span-5",
    "md:col-start-6 md:col-span-4 lg:col-start-6 lg:col-span-4",

    "md:col-start-1 md:col-span-5 lg:col-start-4 lg:col-span-5",
    "md:col-start-6 md:col-span-4 lg:col-start-9 lg:col-span-4",
  ];

  return (
    <section id="cases" className="container">
      <SectionTop>{t("cases.title")}</SectionTop>

      <ul className="grid grid-cols-1 gap-5 md:grid-cols-9 lg:grid-cols-12">
        {casesList.slice(0, columnClasses.length).map((caseItem, i) => (
          <li key={caseItem.link + i} className={columnClasses[i]}>
            <Reveal>
              <CaseCard {...caseItem} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
