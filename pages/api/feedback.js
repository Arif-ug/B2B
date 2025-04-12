// pages/api/feedback.js
import dbConnect from "@/lib/dbConnect";
import Feedback from "@/models/Feedback";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const feedback = await Feedback.create(req.body);
      res.status(201).json({ success: true, data: feedback });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const feedbacks = await Feedback.find().sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: feedbacks });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  }
}
