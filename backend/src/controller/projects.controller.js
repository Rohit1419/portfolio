import { Project } from "../db/models/project.model.js";
import uploadOnClaudinary from "../cloudinarry.js";

const createProject = async (req, res) => {
  // Implementation for creating a project
  const { title, description, tech, demo, github } = req.body;

  if (
    [title, description, tech, demo, github].some(
      (field) => !field || field?.trim() == ""
    )
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const coverImageLocalPath = req.files["coverImage"][0].path;

  if (!coverImageLocalPath) {
    return res.status(400).json({ error: "Cover image is required." });
  }

  const coverImage = await uploadOnClaudinary(coverImageLocalPath);

  if (!coverImage) {
    return res.status(500).json({ error: "Cover image upload failed." });
  }

  const newProject = await new Project.create({
    title,
    description,
    tech,
    demo,
    github,
    coverImage: coverImage.url,
  });

  return res
    .status(201)
    .json({ data: newProject, message: "Project created successfully." });
};

// get all projects

const getAllProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });

  if (!projects) {
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
