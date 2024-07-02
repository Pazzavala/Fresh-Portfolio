'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';

export default function Heder() {
    const [activeSection, setActiveSection] = useState('Home');
    return (
        // We must make relative so z index works
        <header className='z-[999] relative'>
            {/* If we want to animate an element we can simply add motion.element */}
            <motion.div
                className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-75 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
                // The parameters needed for animation:
                // initial is position at first
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                // animate is the position or visual after
                animate={{ y: 0, x: '-50%', opacity: 1 }}
            ></motion.div>

            {/* In order to position items in nab must be flex to use items-center, justify-center */}
            <nav className='flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
                <ul className='flex w-22rem flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
                    {links.map((link) => (
                        <motion.li
                            className='relative h-3/4 flex items-center justify-center'
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={clsx(
                                    'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition',
                                    {
                                        'text-gray-950':
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                // Can also do a sepeate func like: onCLick={handleClick}
                                onClick={() => setActiveSection(link.name)}
                            >
                                {link.name}
                                {link.name === activeSection && (
                                    <motion.span
                                        className='absolute bg-gray-100 rounded-full inset-0 -z-10'
                                        // Framer motion is able to animate this cus it sees all these spans with same layoutid so it removed prev span and animates to next span
                                        layoutId='activeSection'
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
