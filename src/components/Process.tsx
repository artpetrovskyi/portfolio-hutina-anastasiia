import Reveal from "./Reveal";
import SectionTop from "./SectionTop";

const PROCESS = [
  {
    title: "Planning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    title: "Wrap-up",
    description:
      "Final prep: fonts, images, integrations, and content placement — ready for handoff or development.",
  },
  {
    title: "Post-project Support",
    description:
      "I stay in touch for follow-ups, improvements, or new tasks — I’ve got you covered.",
  },
];

export default function Process() {
  const columnClasses = [
    "col-start-1 row-start-1 col-span-6 row-span-1 xl:col-span-3",
    "col-start-1 row-start-2 col-span-6 row-span-1 md:col-span-3 xl:col-start-4 xl:row-start-1 xl:col-span-2",
    "col-start-1 row-start-3 col-span-6 row-span-1 md:col-start-5 md:row-start-2 md:col-span-2 xl:col-start-6 xl:row-start-1 xl:col-span-1",
    "col-start-1 row-start-4 col-span-6 row-span-1 md:row-start-3 md:col-span-3 xl:col-start-2 xl:row-start-2 xl:col-span-2",
    "col-start-1 row-start-5 col-span-6 row-span-1 md:col-start-4 md:row-start-3 md:col-span-2 xl:col-start-4 xl:row-start-2 xl:col-span-1",
    "col-start-1 row-start-6 col-span-6 row-span-1 md:row-start-4 md:col-span-2 xl:col-start-6 xl:row-start-2 xl:col-span-1",
    "col-start-1 row-start-7 col-span-6 row-span-1 md:col-start-4 md:row-start-4 md:col-span-3 xl:col-start-3 xl:row-start-3 xl:col-span-2",
  ];

  return (
    <section className="container">
      <SectionTop>My Process</SectionTop>

      <ul className="grid grid-cols-6 grid-rows-7 gap-5 md:grid-rows-4 xl:grid-rows-3">
        {/* Static text in first slot */}
        <li className={`${columnClasses[0]} flex items-center md:block`}>
          <Reveal>
            <p className="max-w-72 text-2xl leading-none font-extralight uppercase md:max-w-60">
              This is a general outline. Each project is unique, so the process
              may vary depending on your goals and needs.
            </p>
          </Reveal>
        </li>

        {/* PROCESS items start from columnClasses[1] */}
        {PROCESS.map(({ title, description }, i) => (
          <li key={title} className={`${columnClasses[i + 1]} `}>
            <Reveal className="h-full">
              <div className="flex h-full flex-col border border-white p-3 leading-tight">
                <div className="mb-2 text-4xl font-extralight sm:text-5xl">
                  /0{i + 1}
                </div>
                <h3 className="mb-3 flex-1 text-xl font-extralight uppercase sm:text-3xl">
                  {title}
                </h3>
                <p>{description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
