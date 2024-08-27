import About from "@/components/landing/about";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen gap-y-44 w-[80%] items-center m-auto pt-28">
      {/*
          - Main Headline & Supporting Headline (Hero) => Call to action button to navigate to Blogs
          - About => More detailed explanation of the need of reading articles about IT
          - Highlights
          - 
        */}
      <Hero />

      <About />
    </div>
  );
}
