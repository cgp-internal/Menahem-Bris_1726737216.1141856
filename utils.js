function validateInput(inputValue, inputType) {
  if (inputType === 'number') {
    if (isNaN(parseFloat(inputValue)) || inputValue < 0) {
      return false;
    }
    return true;
  } else if (inputType === 'string') {
    if (inputValue.trim() === '') {
      return false;
    }
    return true;
  } else {
    throw new Error(`Unsupported input type: ${inputType}`);
  }
}

module.exports = { validateInput };