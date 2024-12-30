import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { slide, opacity, perspective } from './anim';
import Image from 'next/image';

const anim = (variants) => {
    return {
        initial: "initial",
        animate: "enter",
        exit: "exit",
        variants
    }
}

export default function Inner({children}) {
    return (
        <div className='inner'>
            <motion.div className='slide' {...anim(slide)}/>
            <motion.div className='page' {...anim(perspective)}>
                <motion.div {...anim(opacity)}>
                    <div className='header'>
                        <Link href="#home" style="--vlr:1" class="active">Home</Link>
                        <Link href="#about" style="--vlr:2">About</Link>
                        <Link href="/contact">Contact</Link>
                                           
				   </div>
                   <section class="about" id="about">
        <h2 class="title">About <span>Me</span></h2>
        <Image src="MdSay.png" alt="" class="aboutImg"></Image>
        <div class="text-content2">
            <h2>Frontend Developer</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste asperiores molestiae nemo ipsam porro nam
    nesciunt repudiandae voluptates blanditiis soluta eum, tempora explicabo optio corrupti ullam quidem
    magnam quaerat qui dolorem architecto in dignissimos! Nostrum fugit, modi sed fugiat possimus maxime
    voluptates ea molestiae animi, nesciunt inventore libero hic. Consectetur praesentium facere aut
    perspiciatis voluptate. Nam sunt perspiciatis quasi rem.</p>
            <button class="btn">Read More</button>
        </div>
    </section>

                    {
                        children
                    }
                </motion.div>
            </motion.div>
        </div>
    )
}