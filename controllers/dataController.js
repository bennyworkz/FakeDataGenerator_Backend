const { generateFakeData } = require('../services/fakerService');

exports.generateData = (req, res) => {
  const { fields, volume } = req.body;

  if (!fields || !Array.isArray(fields) || fields.length === 0) {
    return res.status(400).json({ error: 'At least one field is required' });
  }

  if (!volume || volume <= 0) {
    return res.status(400).json({ error: 'Volume must be a positive number' });
  }

  try {
    const data = generateFakeData(fields, volume);
    res.json(data);
  } catch (error) {
    console.error("Error generating fake data:", error.message);
    res.status(500).json({
      error: "Error generating fake data",
      message: error.message,});
  }
};
