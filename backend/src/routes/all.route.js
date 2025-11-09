import {
  getAllProjects,
  createProject,
  deleteProject,
} from "../controller/projects.controller.js";
import {
  getAllExperiences,
  createExperience,
  deleteExperience,
} from "../controller/experiences.controller.js";
import { upload } from "../middleware/multer.middleware.js";

import { Router } from "express";

const router = Router();

// Project Routes :
router.post("/projects/create", upload.single("coverImage"), createProject);
router.get("/projects/get-all", getAllProjects);
router.delete("/projects/:id", deleteProject);

// Experience routes
router.post("/experiences/create", upload.single("logo"), createExperience);
router.get("/experiences/get-all", getAllExperiences);
router.delete("/experiences/:id", deleteExperience);

export default router;
