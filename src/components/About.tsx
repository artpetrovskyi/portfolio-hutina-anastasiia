import Reveal from "./Reveal";
import SectionTop from "./SectionTop";

const features = [
  {
    title: "personality",
    body: "I'm Anastasiia. I value honesty, deep conversations, and real connection. I believe in clear communication and a respectful, mindful approach to every project. Trust and mutual understanding always come first.",
  },
  {
    title: "designer",
    body: "I'm a web designer who helps brands look modern, structured, and confident. I love clean layouts, strong typography, and well-thought-out visuals. For me, design isn't decoration — it's clarity, function, and feeling.",
  },
  {
    title: "What I do",
    body: "I create websites that work: landing pages, portfolios, redesigns, and mobile UI. Every project is personal — I focus on details, adapt to your goals, and always design with care. My main tool is Figma.",
  },
  {
    title: "beyond design",
    body: "Outside of design, I train and stay active — sport gives me energy and focus. I enjoy nature, coffee, and moments away from the screen. I believe great design comes not just from skills, but from living fully and observing the world around us.",
  },
];

export default function About() {
  return (
    <section id="about-me" className="container">
      <SectionTop>About me</SectionTop>

      <div className="md:pl-[20%]">
        <ul className="space-y-5">
          {features.map(({ title, body }, i) => (
            <li key={title}>
              <Reveal
                className={`border-foreground border-b pt-5 pb-2 ${i === 0 && "border-t"}`}
              >
                <div className="relative flex gap-5 pt-16 sm:pt-20">
                  <h3 className="flex-[1_0_9.3rem] self-end text-xl font-extralight uppercase max-[425px]:absolute max-[425px]:-bottom-5 max-[425px]:left-0 max-[425px]:origin-[0_0] max-[425px]:rotate-[-90deg] sm:flex-[1_0_12.5rem] sm:text-3xl">
                    {title}
                  </h3>

                  <p className="flex-[0_1_50rem] max-[425px]:pl-12">{body}</p>

                  <svg
                    className="absolute top-0 right-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path
                      d="M37 38L37 1M37 1L1 1M37 1L1 37.075"
                      stroke="white"
                    />
                  </svg>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
