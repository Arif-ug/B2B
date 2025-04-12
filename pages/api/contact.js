// pages/api/contact.js
import dbConnect from '../../lib/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { firstName, lastName, company, email, message } = req.body;

      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const contact = await Contact.create({ firstName, lastName, company, email, message });
      res.status(201).json({ success: true, data: contact });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
