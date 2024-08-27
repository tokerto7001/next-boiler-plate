import AboutImage from '@/../public/landing-page-about.jpg';
import Image from 'next/image';

export default function About(){

    return (
        <div className='flex w-full h-full gap-8 min-h-96'>
            <div className='relative w-1/2'>
                <Image
                src={AboutImage}
                alt='About Image'
                fill={true}
                className='rounded-md'
                />
            </div>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='bg-secondary-main p-8 rounded-3xl text-white'>
                <h3 className='text-xl'>Stay ahead of the curve with our IT insights. Dive into the latest trends, tutorials, and expert opinions on everything from coding to cybersecurity. Whether you're a seasoned professional or a tech enthusiast, our content is designed to keep you informed and inspired.</h3>
                </div>

            </div>
        </div>
    )
}