import { motion } from "framer-motion";
import { FiGithub, FiDownload, FiLinkedin, FiArrowDown } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full   bg-[#0F172A] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-8 max-w-4xl px-8"
      >
        <div className="space-y-4">
          <motion.h1
            className="text-7xl md:text-8xl mt-20 font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
              Rohit Gite
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl text-slate-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>
        </div>

        <motion.p
          className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I'm a passionate full-stack developer with a strong focus on building
          web applications using React, Node.js, and MongoDB. Always eager to
          learn and explore new technologies to create innovative solutions.
          Let's collaborate and bring your vision to life!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://resume-eta-ashen.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-lg text-slate-900 font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 group cursor-pointer">
              <FiDownload className="group-hover:translate-y-1 transition-transform" />
              Resume
            </button>
          </a>

          <a
            href="https://buymeacoffee.com/rohitgite"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full px-6 sm:px-8 py-3 sm:py-4 border border-slate-700 text-slate-200 rounded-lg hover:border-blue-400 transition-colors flex items-center justify-center gap-2 group">
              <BiCoffeeTogo className="group-hover:rotate-12 transition-transform" />
              Buy me a coffee
            </button>
          </a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="https://github.com/Rohit1419?tab=repositories"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/rohit-g-955391250"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <FiLinkedin size={24} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <FiArrowDown className="text-blue-400 text-3xl animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
