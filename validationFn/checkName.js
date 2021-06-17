function checkName(nodeElem) {
  const val = nodeElem.value;

  if (val.length <= 2) {
    console.log('za mało znaków');
  }

  console.dir(val.length);
}

export default checkName;
