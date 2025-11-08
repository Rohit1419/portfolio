import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      maxLenghth: 200,
    },
    coverImage: {
      type: String,
      required: true,
    },
    tech: {
      type: [String],
      required: true,
      trim: true,
    },
    demoUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Project = model("Project", projectSchema);
