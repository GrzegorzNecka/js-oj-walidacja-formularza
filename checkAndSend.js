import { validElem } from './validationFn';

const config = {
  inputState: [],
  inputVal: []
};

function checkAndSend(validInput, nodeElem, name) {
  validElem(validInput, name);

  config.inputState.push(validInput);
  config.inputVal.push(nodeElem.value);
}

export { checkAndSend, config as configForm };
