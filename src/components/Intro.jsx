import React from 'react'
import Image from 'next/image';
import Background from '../../public/images/2.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div className='h-screen overflow-hidden' ref={container}>
      <motion.div style={{ y }} className='relative h-full'>
        <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='text-white text-8xl font-bold hover:text-gray-500 transition-colors duration-300'>
           HI! IM RANDIMA EDIRIWICKRAMA
          </h1>
        </div>
      </motion.div>
    </div>
  )
}
