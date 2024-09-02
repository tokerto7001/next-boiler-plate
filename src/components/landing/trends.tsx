import TrendCard from "./trend-card";
import AboutImage from '@/../public/landing-page-about.webp';


const dummyData = [
    {
        title: 'Async Programming in Javascript',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!",
        image: AboutImage
    },
    {
        title: 'Data Types in Javascript',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!",
        image: AboutImage
    },
    {
        title: 'OOP Structure in Java',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!",
        image: AboutImage
    },
];

export default function Trends(){

    return (
        <div className="flex flex-col gap-7 mb-24 w-full sm:w-[60%] md:w-full">
        <h1 className="md:text-5xl text-center text-tertiary-main text-3xl">Top Rated Contents</h1>
                <div className="flex w-full min-h-96 md:gap-4 lg:gap-8 gap-6 md:flex-row flex-col">
            {
                dummyData.map((data) => (
                    <TrendCard data={data} key={data.title}/>
                ))
            }
        </div>
        </div>
    )
}