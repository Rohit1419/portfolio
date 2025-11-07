import { motion } from "framer-motion";
import ProfilePic from "../../assets/ProfilePic.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-slate-200">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-400"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image or 3D Model */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-square bg-slate-800 rounded-2xl overflow-hidden"
            >
              {/* Add your image or 3D model here */}
              <img
                src={ProfilePic}
                className="object-cover h-full"
                alt="profilePic"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-slate-300 text-lg">
                A passionate Full Stack Developer with expertise in modern web
                technologies. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-blue-400 font-semibold">Frontend</h3>
                  <ul className="text-slate-400 space-y-1">
                    <li>React</li>
                    {/* <li>Next.js</li> */}
                    <li>Tailwind CSS</li>
                    {/* <li>TypeScript</li> */}
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-blue-400 font-semibold">Backend</h3>
                  <ul className="text-slate-400 space-y-1">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    {/* <li>PostgreSQL</li> */}
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-blue-400"> {`1<`} </h4>
                  <p className="text-slate-400">Years Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-blue-400">10+</h4>
                  <p className="text-slate-400">Projects</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-blue-400">5+</h4>
                  <p className="text-slate-400">Technologies</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
