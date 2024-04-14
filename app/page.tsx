import SafetyWingIcon from "./assets/icons/safetywing.svg";
import NextIcon from "./assets/icons/nextjs.svg";
import ReactIcon from "./assets/icons/react.svg";
import TypescriptIcon from "./assets/icons/typescript.svg";
import TailwindIcon from "./assets/icons/tailwind.svg";
import { Highlight } from "./components/highlight";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, I&apos;m Dino
      </h1>
      <p className="mb-4 leading-[26px]">
        I&apos;m a developer, designer, and strategist. I like to build{" "}
        <i>tangible</i> products that make a difference. Currently, I work as a
        Product Engineer at{" "}
        <Highlight icon={<SafetyWingIcon />} href="https://safetywing.com">
          SafetyWing
        </Highlight>
        , helping to build the first country on the internet 🌎.
      </p>

      <p className="mb-4">
        At the heart of my work is the belief that technology should be simple,
        intuitive, and beautiful. Whether it&apos;s backend architecture,
        interface design, or product strategy, I like to think deeply about both
        practicalities and aesthetics.
      </p>

      <p className="mb-4 leading-[26px]">
        As for code; I&apos;ve been working with{" "}
        <Highlight icon={<ReactIcon />} href="https://react.dev">
          React
        </Highlight>{" "}
        for almost a decade now, love{" "}
        <Highlight
          icon={<TypescriptIcon />}
          href="https://www.typescriptlang.org"
        >
          TypeScript
        </Highlight>
        , and I&apos;m a big fan of{" "}
        <Highlight icon={<NextIcon />} href="https://www.nextjs.org">
          NextJS
        </Highlight>
        . For styling,{" "}
        <Highlight icon={<TailwindIcon />} href="https://www.tailwindcss.com">
          Tailwind
        </Highlight>{" "}
        is my go-to these days.
      </p>

      {/* <p className="mb-6">
        Recently, I started writing about things I find interesting. Sometimes
        it's about code, sometimes it's about design, and sometimes it's about
        life.
      </p>
      <div className="mb-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
