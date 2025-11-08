import {
  getAllProjects,
  createProject,
  deleteProject,
} from "../controller/projects.controller";
import { upload } from "../middleware/multer.middleware.js";

import { Router } from "express";

const router = Router();

// Project Routes :
router.post("/projects/create", upload.single("coverImage"), createProject);
router.get("/projects/get-all", getAllProjects);
router.delete("/projects/:id", deleteProject);

export default router;
