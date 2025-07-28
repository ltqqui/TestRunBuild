// api/version.js
export default function handler(req, res) {
    console.log(process.env.APP_VERSION )
  res.status(200).json({ version: process.env.APP_VERSION || 'hehehe' });
}