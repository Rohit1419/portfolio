import fs from "fs";
import uploadOnClaudinary from "../cloudinarry.js";
import path from "path";

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

  const newProject = project.push({
    title,
    description,
    coverImage: coverImage.url,
    tech,
    demo,
    github,
  });

  return res.status(201).json({ message: "Project created successfully." });
};
