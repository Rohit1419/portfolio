import { Schema, model } from "mongoose";

const experienceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    period: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
      maxLenghth: 500,
    },

    companyWebsite: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timeseries: true }
);

export const Experience = model("Experience", experienceSchema);
