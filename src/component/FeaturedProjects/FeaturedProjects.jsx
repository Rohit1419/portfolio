import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/project";
import ProjectCard from "../ProjectCard/ProjectCard";
import { FiChevronDown } from "react-icons/fi";

const FeaturedProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const featuredProjects = projects.filter((project) => project.featured);

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-20">
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
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>

          {/* Load More / View All */}
          <div className="flex justify-center">
            {visibleProjects < featuredProjects.length ? (
              <button
                onClick={showMoreProjects}
                className="group flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Show More</span>
                <FiChevronDown className="group-hover:translate-y-1 transition-transform" />
              </button>
            ) : (
              <Link
                to="/projects"
                className="px-6 py-3 bg-blue-400 text-slate-900 rounded-lg font-semibold hover:bg-blue-300 transition-colors"
              >
                View All Projects
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
