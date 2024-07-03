'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-headings';
import { FaRegPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
    const { ref } = useSectionInView('Contact');

    return (
        // This min with allows use to keep same with as long as it fits the screen otherwise be 100% in smaller.
        <motion.section
            ref={ref}
            id='contact'
            className='w-[min(100%,38rem)] text-center'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-5'>
                Please contact me directly at{' '}
                <a href='mailto:exampleMail@gmail.com' className=' underline'>
                    exampleMail@gmail.com{' '}
                </a>
                or through this form
            </p>
            {/* The only thing we need to do is call the function */}
            {/* <form className='flex flex-col mt-10' action={sendEmail}> */}
            <form
                className='flex flex-col mt-10'
                action={async (formData) => {
                    await sendEmail(formData);
                }}
            >
                <input
                    name='senderEmail'
                    type='email'
                    placeholder='Your email'
                    required
                    maxLength={500}
                    className='h-14 p-4 rounded-lg border borderBlack'
                ></input>
                <textarea
                    name='message'
                    placeholder='Your message'
                    required
                    maxLength={5000}
                    className='h-52 my-3 p-4 rounded-lg borderBlack'
                />
                <button
                    type='submit'
                    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105'
                >
                    Submit
                    <FaRegPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1' />
                </button>
            </form>
        </motion.section>
    );
}
