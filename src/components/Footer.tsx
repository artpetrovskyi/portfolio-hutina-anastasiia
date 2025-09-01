import type { FooterData } from "@/lib/types";
import Reveal from "./Reveal";

interface Props {
  data?: FooterData;
}

export default function Footer({ data }: Props) {
  const pcImg = data?.pc?.image;
  const mobImg = data?.mob?.image;

  if (!data || (!pcImg && !mobImg)) {
    return null;
  }

  return (
    <footer className="relative container pt-20 pb-12">
      <Reveal>
        {pcImg && (
          <div className="ibg hidden pb-[22%] md:block">
            <img
              src={import.meta.env.VITE_API_URL + pcImg}
              alt="Footer quote desktop"
              className="pointer-events-none object-contain"
              width={1407}
              height={310}
              loading="lazy"
            />
          </div>
        )}
        {mobImg && (
          <div className="ibg pb-[52%] md:hidden">
            <img
              src={import.meta.env.VITE_API_URL + mobImg}
              alt="Footer quote mobile"
              className="pointer-events-none object-contain"
              width={724}
              height={376}
              loading="lazy"
            />
          </div>
        )}
      </Reveal>
    </footer>
  );
}
