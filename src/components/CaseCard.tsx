import { useLanguage } from "@/hooks/useLanguage";
import type { CaseItem } from "@/lib/types";

export default function CaseCard({ title, image, body, link }: CaseItem) {
  const { currentLang } = useLanguage();

  return (
    <div className="group relative">
      <div className="ibg mb-2 flex h-[21rem] items-center justify-center overflow-hidden">
        <img
          src={import.meta.env.VITE_API_URL + image}
          alt={title[currentLang]}
          className="blur-[2px] transition duration-500 group-hover:blur-none"
          width={441}
          height={336}
          loading="lazy"
        />
        <span className="absolute inset-0 bg-black/50" />
        <span className="font-anastasia pointer-events-none absolute inset-0 z-10 -ml-4 flex items-center justify-center p-4 text-center text-6xl leading-none text-white lg:text-[5rem]">
          {title[currentLang]}
        </span>
      </div>

      <p>{body[currentLang]}</p>

      <a href={link} className="absolute inset-0" />
    </div>
  );
}

// export const OfferCard = ({ title, image, body }) => {
//   return (
//     <div className="relative">
//       <div className="ibg mb-2 flex h-[21rem] items-center justify-center overflow-hidden">
//         <img
//           src={`./images/cases/${image}`}
//           alt={title}
//           className="blur-[2px]"
//           width={441}
//           height={336}
//           loading="lazy"
//         />
//         <span className="absolute inset-0 bg-black/50" />
//         <span className="font-anastasia pointer-events-none absolute inset-0 z-10 -ml-4 flex items-center justify-center p-4 text-center text-[5rem] leading-none text-white">
//           {title}
//         </span>
//       </div>

//       <p>{body}</p>
//     </div>
//   );
// };
