const materials = {
  wood: 1.2,
  metal: 1.5,
  vinyl: 1.8,
  composite: 2.0
};

function getMaterialFactor(material) {
  if (!materials[material]) {
    throw new Error(`Unknown material: ${material}`);
  }
  return materials[material];
}

module.exports = { getMaterialFactor };