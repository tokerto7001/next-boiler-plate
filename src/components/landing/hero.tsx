import Image from "next/image";
import HeroImage from "@/../public/landing-page-hero.jpg";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex w-full h-full md:gap-8 min-h-96 flex flex-col gap-8 items-center md:flex-row md:justify-center md:items-stretch">
      <div className="md:w-1/2 flex flex-col gap-9 justify-center md:justify-center md:min-h-full">
        <h1 className="md:text-3xl text-2xl text-primary-main text-center md:text-start">
          Discover Insights That Inspire
        </h1>
        <h3 className="md:text-lg text-md text-center md:text-start">
          Join our community of thinkers, creators, and dreamers. Explore
          curated content across a wide range of topics, crafted to spark your
          curiosity and fuel your passions...
        </h3>
        <div className="w-full flex gap-3 md:justify-normal justify-center">
          <Link href="/example">
            <Button className="bg-primary-main text-white animate-bounce hover:bg-primary-hovered disabled:bg-primary-disabled hover:animate-none duration-1000">
              Discover
            </Button>
          </Link>
          <Button className="bg-tertiary-main text-white w-[20%] hover:bg-tertiary-hovered disabled:bg-tertiary-disabled">
            Blogs
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 relative h-96 w-full">
        <Image
          src={HeroImage}
          alt="Hero Image"
          className="rounded-md object-cover"
          fill={true}
        />
      </div>
    </div>
  );
}
