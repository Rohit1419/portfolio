import { Project } from "../models/project.model.js";
import uploadOnCloudinary from "../cloudinarry.js";

const createProject = async (req, res) => {
  const { title, description, tech, demoUrl, githubUrl, featured } = req.body;

  const requiredFields = [
    "title",
    "description",
    "tech",
    "demoUrl",
    "githubUrl",
    "featured",
  ];

  const missing = requiredFields.filter(
    (field) => !req.body[field] || String(req.body[field]).trim() === ""
  );

  if (missing.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields: ${missing.join(", ")}` });
  }

  const coverImageLocalPath = req.file?.path;

  if (!coverImageLocalPath) {
    return res.status(400).json({ error: "Cover image is required." });
  }

  const uploadedImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!uploadedImage) {
    return res.status(500).json({ error: "Cover image upload failed." });
  }

  const techArray = Array.isArray(tech)
    ? tech
    : tech.split(",").map((t) => t.trim());

  const newProject = await Project.create({
    title,
    description,
    tech: techArray,
    demoUrl,
    githubUrl,
    coverImage: uploadedImage.secure_url,
    featured,
  });

  return res
    .status(201)
    .json({ data: newProject, message: "Project created successfully." });
};

// get all projects

const getAllProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });

  if (projects.length === 0) {
    return res.status(404).json({ error: "No projects found." });
  }

  return res
    .status(200)
    .json({ data: projects, message: "Projects fetched successfully." });
};

// delete the project by id

const deleteProject = async (req, res) => {
  const { id } = req.params;
  const deletedProject = await Project.findByIdAndDelete(id);

  if (!deletedProject) {
    return res.status(404).json({ error: "Project not found." });
  }

  return res
    .status(200)
    .json({ data: deletedProject, message: "Project deleted successfully." });
};

export { createProject, getAllProjects, deleteProject };
