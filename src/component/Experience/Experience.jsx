import { motion } from "framer-motion";
import { experiences } from "../../data/experiences";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-900 py-12 sm:py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 sm:space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-200">
              Work <span className="text-blue-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>

            {/* Experience Cards */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-6 sm:pl-20 pb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-3.5px] sm:left-7 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 mt-8"></div>

                {/* Card */}
                <div className="bg-slate-800 rounded-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-200">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <span className="text-slate-400 mt-2 sm:mt-0">
                      {exp.date}
                    </span>
                  </div>

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-slate-700 text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    Visit Company
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
