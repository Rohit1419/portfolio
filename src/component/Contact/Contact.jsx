import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiGithub } from "react-icons/fi";

import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-200">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400"></div>
          </div>

          <div className="flex flex-col items-center space-y-8">
            <p className="text-slate-300 text-lg text-center max-w-2xl">
              Looking for a passionate developer to join your team? I'm always
              open to new opportunities and interesting projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <FiMail className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-slate-200 font-semibold">Email</h3>
                  <p className="text-slate-400">rohitgite03@gmail.com</p>
                </div>
              </a>

              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
              >
                <BsWhatsapp className="text-blue-400 text-2xl group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-slate-200 font-semibold">WhatsApp</h3>
                  <p className="text-slate-400">+91 7823846641</p>
                </div>
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/rohit-g-955391250"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 text-blue-400 rounded-full hover:bg-slate-700 transition-colors group"
              >
                <FiLinkedin
                  size={28}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="https://github.com/Rohit1419"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 text-blue-400 rounded-full hover:bg-slate-700 transition-colors group"
              >
                <FiGithub
                  size={28}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
