import Image from "next/image";
import HeroImage from '@/../public/landing-page-hero.jpg';
import { Button } from "../ui/button";

export default function Hero(){

    return (
        <div className="flex w-full h-full gap-8">
            <div className="w-1/2 flex flex-col gap-9 justify-center">
                <h1 className="text-3xl text-primary-main">Discover Insights That Inspire</h1>
                <h3>Join our community of thinkers, creators, and dreamers. Explore curated content across a wide range of topics, crafted to spark your curiosity and fuel your passions...</h3>
                <div className="w-full flex gap-3">
                <Button className="bg-primary-main text-white w-[25%] animate-bounce hover:bg-primary-hovered disabled:bg-primary-disabled hover:animate-none duration-1000">Discover</Button>
                <Button className="bg-tertiary-main text-white w-[20%] hover:bg-tertiary-hovered disabled:bg-tertiary-disabled">Blogs</Button>
                </div>
            </div>
            <div className="w-1/2 h-72 relative">
                <Image 
                src={HeroImage}
                alt="Hero Image"
                className="rounded-md w-[70%]"
                fill={true}
                />
            </div>
        </div>
    )
}