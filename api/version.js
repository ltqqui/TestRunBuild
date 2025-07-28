// api/version.js
export default function handler(req, res) {
  res.status(200).json({ version: process.env.APP_VERSION || 'hehehe' });
}