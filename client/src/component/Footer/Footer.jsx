import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BiCoffeeTogo } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              r.
            </h3>
            <p className="text-slate-400 mt-2">
              © {new Date().getFullYear()} Design & Built by Rohit Gite. All
              rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-8">
            <a
              href="/#about"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#experience"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="/#projects"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="/#contact"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/Rohit1419"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/rohit-g-955391250"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:rohitgite03@gmail.com"
              className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://buymeacoffee.com/rohitgite"
              className="p-2 text-slate-400 hover:text-blue-400 transition-colors"
            >
              <BiCoffeeTogo size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
