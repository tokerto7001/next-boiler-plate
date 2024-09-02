import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";
import Trends from "@/components/landing/trends";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen gap-y-20 md:gap-y-44 md:w-[75%] w-full items-center m-auto md:pt-28 pt-16 p-4 md:p-0">
      {/*
          - Main Headline & Supporting Headline (Hero) => Call to action button to navigate to Blogs
          - About => More detailed explanation of the need of reading articles about IT
          - Highlights
          - 
        */}
      <Hero />

      <About />

      <Trends />
    </div>
  );
}
