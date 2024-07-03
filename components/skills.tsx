'use client';

import React from 'react';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-headings';
import { animate, motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

// Same thing diff syntax
// animate: () => {
//     return {
//         opacity: 1,
//         y: 0,
//         transition: {
//             delay: 0.05,
//         },
//     };
// },

export default function Skills() {
    const { ref } = useSectionInView('Skills');

    return (
        <section
            ref={ref}
            id='skills'
            className='max-w-[53rem] scroll-mt-28 text-center'
        >
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className='bg-white borderBlack rounded-xl px-5 py-3'
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
