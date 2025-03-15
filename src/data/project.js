import techmaven from "../assets/projectsAssets/techmaven.png";
import cheffclaude from "../assets/projectsAssets/cheffclaude.png";
import portfolio from "../assets/projectsAssets/portfolio.png";
import feugo from "../assets/projectsAssets/feugo.png";

export const projects = [
  {
    title: "Techmaven",
    description: "Full-stack e-commerce solution for affiliate marketing ",
    image: techmaven,
    tech: ["React", "Node.js", "MongoDB", "Express", "cloudinary"],
    demo: "https://techmaventt.onrender.com",
    github: "https://github.com/Rohit1419/techMaven",
    featured: true,
  },
  {
    title: "CheffClaude",
    description:
      "A web application that generates delicious recipes based on your available ingredients using AI!",
    image: cheffclaude,
    tech: ["React", "huggingface"],
    demo: "https://demo.com",
    github: "https://github.com/Rohit1419/CheffClaude",
    featured: true,
  },
  {
    title: "Portfolio",
    description:
      "My personal portfolio website showcasing my projects and skills.",
    image: portfolio,
    tech: ["React", "Tailwind CSS", "Vite"],
    demo: "https://demo.com",
    github: "https://github.com/Rohit1419/portfolio",
    featured: true,
  },
  {
    title: "Feugo",
    description: "A mordern UI for food pickup service with geolocation .",
    image: feugo,
    tech: ["React", "Tailwind CSS", "openCage Geocoder"],
    demo: "https://feugo.vercel.app/",
    github: "https://github.com/Rohit1419/Feugo",
    featured: true,
  },
];
