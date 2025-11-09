import { Experience } from "../models/experiences.model.js";
import uploadOnCloudinary from "../cloudinarry.js";

// Create a new experience

const createExperience = async (req, res) => {
  const { title, company, period, details, companyWebsite } = req.body;

  const requiredFields = [
    "title",
    "company",
    "period",
    "details",
    "companyWebsite",
  ];

  const missing = requiredFields.filter(
    (field) => !req.body[field] || String(req.body[field]).trim() === ""
  );

  if (missing.length > 0) {
    return res
      .status(400)
      .json({ error: `Missing required fields: ${missing.join(", ")}` });
  }

  //   # upload the image

  const logoLocalPath = req.file?.path;

  if (!logoLocalPath) {
    return res.status(400).json({ error: "Logo is required." });
  }
  const uploadedLogo = await uploadOnCloudinary(logoLocalPath);
  if (!uploadedLogo) {
    return res.status(500).json({ error: "Logo upload failed." });
  }

  const newExperience = await Experience.create({
    title,
    company,
    period,
    details,
    companyWebsite,
    logo: uploadedLogo.secure_url,
  });

  return res
    .status(201)
    .json({ data: newExperience, message: "Experience created successfully." });
};

// get all experiences
const getAllExperiences = async (req, res) => {
  const experiences = await Experience.find().sort({ createdAt: -1 });

  if (experiences.length === 0) {
    return res.status(404).json({ error: "No experiences found." });
  }

  return res.status(200).json({ data: experiences });
};

// deleteExperience

const deleteExperience = async (req, res) => {
  const { id } = req.params;
  const deletedExperience = await Experience.findByIdAndDelete(id);

  if (!deletedExperience) {
    return res.status(404).json({ error: "Experience not found." });
  }

  return res.status(200).json({
    data: deletedExperience,
    message: "Experience deleted successfully.",
  });
};

export { createExperience, getAllExperiences, deleteExperience };
