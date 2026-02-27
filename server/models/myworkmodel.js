import { Schema, model } from "mongoose";

const workSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 300,
    },

    tech: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length > 0,
        message: "At least one technology is required",
      },
    },

    github: {
      type: String,
      required: true,
      match: /^https?:\/\/.+/,
    },

    live: {
      type: String,
      default: null,
      match: /^https?:\/\/.+/,
    },
  },
  { timestamps: true },
);

const Work = model("Work", workSchema);
export default Work;
