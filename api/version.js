export default function handler(req, res) {
  // Lấy giá trị version từ biến môi trường hoặc hardcode
  const version = process.env.APP_VERSION || '1.0.0';
  res.status(200).json({ version });
}