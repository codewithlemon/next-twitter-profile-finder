export default function handler(req, res) {
  res.status(404).json({
    message: "No such resource",
  })
}
