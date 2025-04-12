// File: /pages/api/hire.js
import dbConnect from '../../lib/dbConnect';
import HireRequest from '../../models/HireRequest';
export default async function handler(req, res) {
  await dbConnect();
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phone, message } = req.body;

      // Basic validation
      if (!firstName || !email || !message) {
        return res.status(400).json({ error: 'First name, email, and message are required.' });
      }
      // Create and save hire request
      const hireRequest = await HireRequest.create({
        firstName,
        lastName,
        email,
        phone,
        message,
      });

      res.status(201).json({ success: true, data: hireRequest });
    } catch (error) {
      console.error('Error creating hire request:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
