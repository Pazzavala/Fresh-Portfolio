'use client';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    // This is a hook with one input object that has two properties wich is target element and offset
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1'],
    });
    // 0 is top of view port (the whole page) and 1 crosses the top of the target (each project) this when animation should begin
    // 1.33 stop when reach 30%

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    // Article mean this is a section that can exists out of this web
    return (
        <motion.div
            ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <article className='relative bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-8 hover:bg-gray-200 transition'>
                <div className='flex flex-col h-full px-5 pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] group-even:ml-[18rem] '>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-700'>
                        {description}
                    </p>

                    {/* This mt-auto makes sure to position tags as boom most as it can the container holding it just has to be flex and h-full*/}
                    <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt='Project I worked on'
                    quality={95}
                    className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 
            group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
            transition'
                ></Image>
            </article>
        </motion.div>
    );
}
