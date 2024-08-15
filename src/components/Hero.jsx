import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Button from '@mui/material/Button';
import profilePic from "../assets/PfpPic.png";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/AayushAnand_SWE.pdf";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay }}
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 -mt-14">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h2 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Aayush Anand</motion.h2>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Developer</motion.span>
                    <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</motion.p>
                    
                    <Button className="sm:mb-4 lg:mb-0" variant="contained" color="secondary">
                      <a href={resume} download="Aayush_Resume.pdf" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        <FaDownload className="pr-1" />
                        <span>Download Resume</span>
                      </a>
                    </Button>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img className="rounded-2xl" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }} src={profilePic} alt="Profile Pic" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero;
