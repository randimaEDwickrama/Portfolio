import React, { useState, useEffect } from 'react';

export default function Content() {
  return (
    <div className='bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between'>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
}

const Section2 = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateLocalTime = () => {
      const date = new Date();
      const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Colombo',
      };
      const timeString = date.toLocaleTimeString('en-US', options);
      setTime(`${timeString} GMT+5:30`);
    };

    updateLocalTime(); 
    const interval = setInterval(updateLocalTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex justify-between items-end mt-10'>
      <h1 className='text-[10vw] leading-[0.8] text-white'>Let s collaborate</h1>
      <div className='flex flex-col items-end text-white'>
        <p className='text-lg'>LOCAL TIME</p>
        <p className='text-lg'>{time}</p>
      </div>
    </div>
  );
}

const Nav = () => {
  return (
    <div className='flex shrink-0 gap-20'>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
        <p className='text-white'>Home</p>
        <p className='text-white'>Projects</p>
        <p className='text-white'>Our Mission</p>
        <p className='text-white'>Contact Us</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
        <p className='text-white'>News</p>
        <p className='text-white'>Learn</p>
        <p className='text-white'>Certification</p>
        <p className='text-white'>Publications</p>
      </div>
    </div>
  );
}
