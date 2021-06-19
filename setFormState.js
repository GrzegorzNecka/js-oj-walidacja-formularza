import { validElem } from './validationFn';

const state = {
  inputState: [],
  inputVal: []
};

function resetStateForm() {
  state.inputState = [];
  state.inputVal = [];
}

function setFormState(validInput, nodeElem, name) {
  validElem(validInput, name);

  state.inputState.push(validInput);
  state.inputVal.push(nodeElem.value);
}

export { setFormState, resetStateForm, state as stateForm };
