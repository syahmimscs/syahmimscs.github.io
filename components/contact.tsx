"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const {ref} = useSectionInView('Contact',0.5);

  return (

    // pick the smaller one between 100% and 38rem
    <motion.section ref={ref} id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    viewport={{once:true}}
    > 
        <SectionHeading>
            Contact me
        </SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a className='underline' href='mailto:syahmimcbs600@gmail.com'> syahmimcbs600@gmail.com</a>{" "} or through this form.</p>
        <form className='mt-10 flex flex-col dark:text-black' action={async (formData)=>{
            const {data,error} = await sendEmail(formData);
            if (error){
                toast.error(error);
                return;
            }
            toast.success("Email sent successfully!")
        }}>
            <input type="email" className='px-4 h-14 rounded-lg borderBlack dark:bg-white dark:focus:bg-opacity-80 transition-all dark:outline-none' required maxLength={500} placeholder='Your email' name='email'/>
            <textarea required maxLength={5000} className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:focus:bg-opacity-80 transition-all dark:outline-none' placeholder='Your message' name='message'/>
            
        <SubmitBtn/>
        </form>

    </motion.section>
  )
}
