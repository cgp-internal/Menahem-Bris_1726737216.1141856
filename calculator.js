const { getMaterialFactor } = require('./materials');

function calculatePergolaSize(width, length, material, postSpacing = 8) {
  const materialFactor = getMaterialFactor(material);
  const postCount = Math.ceil((width / postSpacing) * 2) + Math.ceil((length / postSpacing) * 2);
  const totalLength = postCount * materialFactor;
  return totalLength;
}

module.exports = { calculatePergolaSize };