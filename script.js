const { calculatePergolaSize } = require('./calculator');
const { validateInput } = require('./utils');

let widthInput, lengthInput, materialInput;

document.addEventListener('DOMContentLoaded', () => {
  widthInput = document.getElementById('width-input');
  lengthInput = document.getElementById('length-input');
  materialInput = document.getElementById('material-input');

  document.getElementById('calculate-button').addEventListener('click', calculate);
});

function getValuesFromInputs() {
  const widthValue = widthInput.value;
  const lengthValue = lengthInput.value;
  const materialValue = materialInput.value;

  if (!validateInput(widthValue, 'number') || !validateInput(lengthValue, 'number')) {
    alert('Please enter valid width and length values.');
    return null;
  }

  return { width: parseFloat(widthValue), length: parseFloat(lengthValue), material: materialValue };
}

function calculate() {
  const userInput = getValuesFromInputs();
  if (userInput === null) return;

  const pergolaSize = calculatePergolaSize(userInput.width, userInput.length, userInput.material);
  document.getElementById('result').innerText = `Pergola size: ${pergolaSize} meters`;
}