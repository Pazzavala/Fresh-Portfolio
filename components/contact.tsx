'use client';

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

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
            <p className='text-gray-700 -mt-6 dark:text-white/80'>
                Please contact me directly at{' '}
                <a href='mailto:exampleMail@gmail.com' className=' underline'>
                    exampleMail@gmail.com{' '}
                </a>
                or through this form
            </p>
            {/* The only thing we need to do is call the function */}
            {/* <form className='flex flex-col mt-10' action={sendEmail}> */}
            <form
                className='mt-10 flex flex-col dark:text-black'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success('Email Sent succesfully!');
                }}
            >
                <input
                    className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    name='senderEmail'
                    type='email'
                    required
                    maxLength={500}
                    placeholder='Your email'
                />
                <textarea
                    className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
                    name='message'
                    placeholder='Your message'
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
