import React from 'react';
import { BiLogoPostgresql } from 'react-icons/bi';
import { DiRedis, DiJava, DiHtml5, DiCss3 } from 'react-icons/di';
import { FaNodeJs, FaBootstrap, FaGithub } from 'react-icons/fa6';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiTailwindcss, SiSpringboot, SiPostman, SiMysql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { TbBrandVite } from "react-icons/tb";
import {animate, motion} from "framer-motion"



const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
      <motion.h2 
      whileInView={{opacity:1,y:0 }}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>

      {/* Flex container for the icons */}
      <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-8'>

        {/* React */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Next.js */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className='p-4'>
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        {/* MongoDB */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className='p-4'>
          <SiMongodb className="text-7xl text-green-600" />
        </motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'>
          <TbBrandVite className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Node.js */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className='p-4'>
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'>
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        {/* HTML5 */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className='p-4'>
          <DiHtml5 className="text-7xl text-orange-600" />
        </motion.div>

        {/* CSS3 */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className='p-4'>
          <DiCss3 className="text-7xl text-blue-600" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className='p-4'>
          <FaBootstrap className="text-7xl text-purple-700" />
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className='p-4'>
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Java */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'>
          <DiJava className="text-7xl text-red-600" />
        </motion.div>

        {/* Spring Boot */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className='p-4'>
          <SiSpringboot className="text-7xl text-green-500" />
        </motion.div>

        {/* MySQL */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className='p-4'>
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        {/* GitHub */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(7)}
          className='p-4'>
          <FaGithub className="text-7xl text-gray-900" />
        </motion.div>

        {/* Postman */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className='p-4'>
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technologies;
