import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiUser,
  FiBriefcase,
  FiCode,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Logo from "../../assets/azure.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", icon: FiUser },
    { name: "Experience", icon: FiBriefcase },
    { name: "Projects", icon: FiCode },
    { name: "Contact", icon: FiMail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50   transition-all duration-300 ${
        scrolled ? "py-4 bg-[#0F172A]/95" : "py-6 bg-transparent"
      } backdrop-blur-sm`}
    >
      <div className="max-w-full  px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-medium tracking-tight"
        >
          <a href="/">
            <img src={Logo} width="27px" color="#60A5FA" alt="logo" />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={`/#${item.name.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-sm text-[#94A3B8] hover:text-[#F1F5F9] transition-all relative group flex items-center gap-2"
            >
              <item.icon size={16} />
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#34D399] transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#94A3B8] hover:text-[#F1F5F9]"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0F172A] border-t border-[#334155] md:hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`/#${item.name.toLowerCase()}`}
                  className=" text-[#94A3B8] hover:text-[#F1F5F9] transition-all flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon size={16} />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
