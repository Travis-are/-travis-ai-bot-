import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const lead = req.body;
    const timestamp = new Date().toISOString();
    const leadWithMeta = { ...lead, timestamp, source: req.headers.referer || 'direct' };

    const filePath = path.join(process.cwd(), 'leads.json');
    let leads = [];
    
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      leads = JSON.parse(data);
    }
    
    leads.push(leadWithMeta);
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    console.log('NEW LEAD CAPTURED:', leadWithMeta);

    res.status(200).json({ success: true, message: 'Lead saved' });
  } catch (error) {
    console.error('Save lead error:', error);
    res.status(500).json({ error: 'Failed to save lead' });
  }
}
