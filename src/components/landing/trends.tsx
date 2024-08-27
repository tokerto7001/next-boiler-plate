import TrendCard from "./trend-cards";


const dummyData = [
    {
        title: 'Async Programming in Javascript',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!"
    },
    {
        title: 'Data Types in Javascript',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!"
    },
    {
        title: 'OOP Structure in Java',
        content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, error velit sequi amet iste nam illo autem nemo commodi aspernatur!"
    },
];

export default function Trends(){

    return (
        <div className="flex flex-col gap-7 mb-24">
        <h1 className="md:text-5xl text-center text-tertiary-main text-3xl">Top Rated Contents</h1>
                <div className="flex w-full min-h-96 gap-8 md:flex-row flex-col">
            {
                dummyData.map((data) => (
                    <TrendCard data={data} key={data.title}/>
                ))
            }
        </div>
        </div>
    )
}