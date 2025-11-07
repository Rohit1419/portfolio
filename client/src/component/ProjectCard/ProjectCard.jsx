import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group rounded-xl overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover transition-all duration-300 group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 p-3 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <p className="text-slate-200">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-400 text-slate-900 rounded-lg hover:bg-blue-300 transition-colors flex items-center gap-2"
            >
              <FiExternalLink size={20} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400/10 transition-colors flex items-center gap-2"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
