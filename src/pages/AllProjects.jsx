import { motion } from "framer-motion";
import { projects } from "../data/project";
import ProjectCard from "../component/ProjectCard/ProjectCard";

const AllProjects = () => {
  return (
    <section className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-200">
              All <span className="text-blue-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AllProjects;
