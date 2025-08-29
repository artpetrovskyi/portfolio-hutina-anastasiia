import type { JSX } from "react";

interface Props {
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}
export default function SectionTop({ children, tag: Wrapper = "h2" }: Props) {
  return (
    <Wrapper className="font-anastasia mb-6 -ml-2 text-7xl leading-none sm:-ml-5 sm:text-8xl md:mb-8 md:-ml-3 lg:text-[9.5rem] xl:-ml-5 xl:text-[10.6rem]">
      {children}
    </Wrapper>
  );
}
