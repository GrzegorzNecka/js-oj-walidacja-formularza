import { validElem } from './validationFn';

const state = {
  inputState: [],
  inputVal: {}
};

function resetStateForm() {
  state.inputState = [];
  state.inputVal = {};
}

function setFormState(validInput, nodeElem, name) {
  validElem(validInput, name);

  console.log(name);
  console.log(nodeElem);

  state.inputState.push(validInput);

  state.inputVal[name] = nodeElem.value;
}

export { setFormState, resetStateForm, state as stateForm };
