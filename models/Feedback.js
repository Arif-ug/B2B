// models/Feedback.js
import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  name: String,
  designation: String,
  review: String,
  rating: Number,
  imageUrl: String,
}, { timestamps: true });

export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
