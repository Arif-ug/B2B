// File: /models/HireRequest.js
import mongoose from 'mongoose';

const HireRequestSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  phone: { type: String, required: false },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.HireRequest || mongoose.model('HireRequest', HireRequestSchema);
