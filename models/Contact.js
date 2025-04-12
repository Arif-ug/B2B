// models/Contact.js
import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('contacts', ContactSchema);
// export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
