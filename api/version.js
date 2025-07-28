import { readFileSync } from 'fs';
export default function handler(req, res) {
  try {
    const data = readFileSync('public/version.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.status(200).json(jsonData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load version' });
  }
}