interface Props {
  title: string;
  image: string;
  body: string;
  href: string;
}

export default function CaseCard({ title, image, body, href }: Props) {
  return (
    <div className="group relative">
      <div className="ibg mb-2 flex h-[21rem] items-center justify-center overflow-hidden">
        <img
          src={`./images/cases/${image}`}
          alt={title}
          className="blur-[2px] transition duration-500 group-hover:blur-none"
          width={441}
          height={336}
          loading="lazy"
        />
        <span className="absolute inset-0 bg-black/50" />
        <span className="font-anastasia pointer-events-none absolute inset-0 z-10 -ml-4 flex items-center justify-center p-4 text-center text-6xl leading-none text-white lg:text-[5rem]">
          {title}
        </span>
      </div>

      <p>{body}</p>

      <a href={href} className="absolute inset-0" />
    </div>
  );
}

interface OfferCardProps {
  title: string;
  image: string;
  body: string;
}

export const OfferCard = ({ title, image, body }: OfferCardProps) => {
  return (
    <div className="relative">
      <div className="ibg mb-2 flex h-[21rem] items-center justify-center overflow-hidden">
        <img
          src={`./images/cases/${image}`}
          alt={title}
          className="blur-[2px]"
          width={441}
          height={336}
          loading="lazy"
        />
        <span className="absolute inset-0 bg-black/50" />
        <span className="font-anastasia pointer-events-none absolute inset-0 z-10 -ml-4 flex items-center justify-center p-4 text-center text-[5rem] leading-none text-white">
          {title}
        </span>
      </div>

      <p>{body}</p>
    </div>
  );
};
