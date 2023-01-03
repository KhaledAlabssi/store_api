const notFoundMiddleware = (req, res) =>
  res.status(404).json({ success: false, message: err.name || err.message });

export default notFoundMiddleware;
